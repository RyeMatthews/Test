// src/pages/api/upload.js
export const config = {
  api: {
    bodyParser: false, // Important: allow FormData parsing manually
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    // For now, we mock it
    console.log("Received a file upload!");

    // In real life: parse file, upload to AWS S3
    return res.status(200).json({ message: "File received!" });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}