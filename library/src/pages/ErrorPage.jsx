import error_image from '../assets/empty_library.jpg';

export const ErrorPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-3">
      <p className="text-light-orange font-bold text-xl">
        404: Ajaj, tady žádnou knihu nenajdeš
      </p>
      <div className="w-1/2">
        <img src={error_image} alt="error-image" className="object-cover" />
      </div>
    </div>
  );
};
