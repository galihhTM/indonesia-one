"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <main className="min-h-screen bg-[#1a1c3b] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-serif text-white text-center mb-8">Admin Login</h1>
        
        <form action={formAction} className="space-y-5">
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="w-full bg-black/30 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b2f2a]"
                required
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="w-full bg-black/30 text-white pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b2f2a]"
                required
              />
            </div>
          </div>

          {state?.error && (
            <p className="text-red-400 text-sm text-center bg-red-900/30 p-2 rounded">{state.error}</p>
          )}

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-[#3b2f2a] hover:bg-[#2a201a] text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {isPending ? "Memproses..." : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}