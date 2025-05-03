// src/pages/upload.jsx
import Navbar from "@/components/Navbar";
import UploadForm from "@/components/UploadForm";

export default function UploadPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 py-12">
        <UploadForm />
      </main>
    </>
  );
}