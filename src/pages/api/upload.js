import AWS from 'aws-sdk';
import formidable from 'formidable';

export const config = { api: { bodyParser: false } };

const s3 = new AWS.S3({ region: process.env.AWS_REGION });

export default async (req, res) => {
  if (req.method === "POST") {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ error: "Upload error" });

      const file = files.file;
      const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${Date.now()}_${file.originalFilename}`,
        Body: fs.createReadStream(file.filepath),
      };

      await s3.upload(params).promise();
      res.status(200).json({ message: "Uploaded to S3" });
    });
  } else {
    res.status(405).end();
  }
};