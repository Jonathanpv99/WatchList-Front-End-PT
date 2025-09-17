"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { getRandomEvents } from "@/utils/auxfunctions";

interface WatchlistForm {
  name: string;
  terms: string[];
}

export default function CreateWatchlistPage() {
  const [form, setForm] = useState<WatchlistForm>({
    name: "",
    terms: [""],
  });
  const [errors, setErrors] = useState<{ name?: string; terms?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const addTerm = () => {
    if (form.terms.length < 20) {
      setForm((prev) => ({
        ...prev,
        terms: [...prev.terms, ""],
      }));
    }
  };

  const removeTerm = (index: number) => {
    if (form.terms.length > 1) {
      setForm((prev) => ({
        ...prev,
        terms: prev.terms.filter((_, i) => i !== index),
      }));
    }
  };

  const updateTerm = (index: number, value: string) => {
    setForm((prev) => ({
      ...prev,
      terms: prev.terms.map((term, i) => (i === index ? value : term)),
    }));
  };

  const validateForm = () => {
    const newErrors: { name?: string; terms?: string } = {};

    if (!form.name.trim()) {
      newErrors.name = "Watchlist name is required";
    }

    const nonEmptyTerms = form.terms.filter((term) => term.trim());
    if (nonEmptyTerms.length === 0) {
      newErrors.terms = "At least one term is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate events sistems
    const events = getRandomEvents();

    const newForm = {
      ...form,
      events,
    };

    try {
      const response = await axios.put(
        process.env.NEXT_PUBLIC_API_URL + "/api/watch-list/create",
        newForm
      );
      console.log("response.status", response.status);
      if (response.status === 200) {
        setIsSubmitting(false);
        setIsSuccess(true);
        toast.success(
          "!!Watchlis Analizado Correctamente, mira las recomendaciones en Eventos!!",
          {
            duration: 3000,
          }
        );
      } else {
        setIsSubmitting(false);
        setIsSuccess(false);
        toast("Algo salio mal el registrar!");
      }
    } catch (error) {
      console.log("error al registrar watchlis", error);
      setIsSubmitting(false);
      setIsSuccess(false);
      toast.error("error al registrar watchlis");
    }
  };

  const clearForm = () => {
    setForm({ name: "", terms: [""] });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">
              Watchlist Name *
            </p>
            <Input
              id="watchlist-name"
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Enter watchlist name (e.g., Security Threats, VIP Monitoring)"
              className={`focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-red-600" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700">
                Terms to Monitor *
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addTerm}
                disabled={form.terms.length >= 20}
                className="text-blue-600 border-blue-300 hover:bg-blue-50 hover:border-blue-400 transition-colors"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Term
              </Button>
            </div>

            <div className="space-y-3">
              {form.terms.map((term, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-1">
                    <Input
                      type="text"
                      value={term}
                      onChange={(e) => updateTerm(index, e.target.value)}
                      placeholder="Enter term or keyword"
                      className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
                    />
                  </div>
                  {form.terms.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTerm(index)}
                      className="text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors p-2"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            {errors.terms && (
              <p className="text-sm text-red-600" role="alert">
                {errors.terms}
              </p>
            )}

            <p className="text-xs text-gray-500">
              Add up to 20 terms. Each term will be monitored across all
              security channels.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creating Watchlist...
                </>
              ) : (
                "Send"
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={clearForm}
              disabled={isSubmitting}
              className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 transition-colors bg-transparent"
            >
              Clear Form
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
