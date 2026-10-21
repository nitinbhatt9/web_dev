import ImageKit from "@imagekit/nodejs";
import dotenv from "dotenv";

console.log("ENV", process.env.PRIVATEKEY);

const imagekit = new ImageKit({
  privateKey: process.env.PRIVATEKEY,
});

async function uploadFileToImageKit(fileBuffer, filename) {
  const uploadRes = await imagekit.files.upload({
    file: fileBuffer.toString("base64"),
    fileName: filename,
  });
  return uploadRes;
}

export { uploadFileToImageKit };
