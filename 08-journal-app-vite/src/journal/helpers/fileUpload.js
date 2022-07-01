export const fileUpload = async (file) => {
  if (!file) return null;

  const cloudUrl = 'https://api.cloudinary.com/v1_1/dn3kl3egc/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const response = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) throw new Error('No se pudo subir la imagen.');

    const cloudResponse = await response.json();
    return cloudResponse.secure_url;
  } catch (err) {
    return null;
  }
};
