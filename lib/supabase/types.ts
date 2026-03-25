// ─────────────────────────────────────────────
// Supabase Database Types
// Run: npx supabase gen types typescript --project-id YOUR_PROJECT_ID
// to auto-generate this file from your actual schema.
// ─────────────────────────────────────────────

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: number;
          created_at: string;
          name: string;
          email: string;
          phone: string | null;
          message: string;
          status: "new" | "read" | "replied";
        };
        Insert: {
          name: string;
          email: string;
          phone?: string | null;
          message: string;
          status?: "new" | "read" | "replied";
        };
        Update: {
          name?: string;
          email?: string;
          phone?: string | null;
          message?: string;
          status?: "new" | "read" | "replied";
        };
      };
      teachers: {
        Row: {
          id: number;
          created_at: string;
          name: string;
          position: string;
          degree: string | null;
          specialization: string | null;
          experience: string | null;
          image_url: string | null;
          email: string | null;
          linkedin: string | null;
          profile_url: string | null;
          is_active: boolean;
          sort_order: number;
        };
        Insert: {
          name: string;
          position: string;
          degree?: string | null;
          specialization?: string | null;
          experience?: string | null;
          image_url?: string | null;
          email?: string | null;
          linkedin?: string | null;
          profile_url?: string | null;
          is_active?: boolean;
          sort_order?: number;
        };
        Update: {
          name?: string;
          position?: string;
          degree?: string | null;
          specialization?: string | null;
          experience?: string | null;
          image_url?: string | null;
          email?: string | null;
          linkedin?: string | null;
          profile_url?: string | null;
          is_active?: boolean;
          sort_order?: number;
        };
      };
      news: {
        Row: {
          id: number;
          created_at: string;
          title: string;
          slug: string;
          excerpt: string | null;
          content: string | null;
          image_url: string | null;
          published: boolean;
          published_at: string | null;
          author: string | null;
        };
        Insert: {
          title: string;
          slug: string;
          excerpt?: string | null;
          content?: string | null;
          image_url?: string | null;
          published?: boolean;
          published_at?: string | null;
          author?: string | null;
        };
        Update: {
          title?: string;
          slug?: string;
          excerpt?: string | null;
          content?: string | null;
          image_url?: string | null;
          published?: boolean;
          published_at?: string | null;
          author?: string | null;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
