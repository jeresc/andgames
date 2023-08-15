import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { WidgetButton, UploadedImage } from './upload-widget.styles';
import { setForm } from '@/redux';
import { useDispatch } from 'react-redux';

export const UploadWidget = () => {
  const [uploadedImage, setUploadedImage] = useState();
  const dispatch = useDispatch();

  const createWidget = () => {
    if ('cloudinary' in window) {
      return window.cloudinary.createUploadWidget(
        {
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
          uploadPreset: 'videogames',
          maxFiles: 1,
          cropping: true,
          sources: ['local', 'url', 'image_search', 'unsplash'],
          searchBySites: ['https://unsplash.com/', 'https://pixabay.com/'],
          resourceType: 'image',
          googleApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
          styles: {
            palette: {
              window: '#252525',
              windowBorder: '#aaa',
              tabIcon: '#f8b232',
              menuIcons: '#fff',
              textDark: '#fff',
              textLight: '#252525',
              inactiveTabIcon: '#ccc',
              sourceBg: '#202020',
              action: '#f8b232',
              link: '#f8b232',
            },
            frame: {
              background: '#18181890',
            },
          },
        },
        (error, result) => {
          if (!error && result && result.event === 'success') {
            console.log(result);
            setUploadedImage(result.info.secure_url);
          }
        },
      );
    }
  };

  const widgetRef = useRef();

  useEffect(() => {
    dispatch(setForm({ field: 'image', value: uploadedImage }));
  }, [uploadedImage, dispatch]);

  useEffect(() => {
    const onIdle = () => {
      if (!widgetRef.current) {
        widgetRef.current = createWidget();
      }
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(onIdle);
    } else {
      setTimeout(onIdle, 0);
    }
  }, []);

  useEffect(() => {
    console.log(uploadedImage);
  }, [uploadedImage]);

  const openWidget = () => {
    if (widgetRef.current) {
      widgetRef.current.open();
    }
  };

  return (
    <div>
      <WidgetButton onClick={openWidget}>Upload Button</WidgetButton>
      {uploadedImage && <UploadedImage src={uploadedImage} />}
    </div>
  );
};
