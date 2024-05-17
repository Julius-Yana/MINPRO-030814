'use client';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="h-screen max-w-[2480px] xl:px-20 md:px-10 sm:px-2 px-4 mx-auto bg-white font-black">
      {children}
    </div>
  );
};

export default Container;
