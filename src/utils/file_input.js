 async function uploadFile() {
      const input = document.getElementById('fileInput');
      const file = input.files[0];

      if (!file) {
        alert('No file selected.');
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const result = await response.json();
          alert('Upload successful!');
          console.log('Server response:', result);
        } else {
          throw new Error(`Server error: ${response.status}`);
        }
      } catch (error) {
        alert('Upload failed.');
        console.error(error);
      }
   }
