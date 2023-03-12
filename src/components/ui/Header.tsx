type HeaderType = {
  children: JSX.Element;
  classname?: string;
};

export default function Header({ children, classname }: HeaderType) {
  return (
    <header
      className={`fixed z-10 h-20 w-screen px-5 text-white transition duration-700 sm:px-10 lg:px-20 ${classname}`}
    >
      {children}
    </header>
  );
}
