export const fileUpload = async (file) => {
  if (!file) throw new Error('No tenemos ningun archivo a subir.');
  const cloudUrl = 'https://api.cloudinary.com/v1_1/dn3kl3egc/upload';
  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const response = await fetch(cloudUrl, {
      method: 'POST',
      body: formData,
    });

    console.log(response);
    if (!response.ok) throw new Error('No se pudo subir la imagen.');

    const cloudResponse = await response.json();
    console.log(cloudResponse);

    return cloudResponse.secure_url;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};
