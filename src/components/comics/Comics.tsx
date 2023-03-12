import ComicsInterface from "../../core/Comics.interface";

type ComicsType = {
  item: ComicsInterface;
  click: (item: ComicsInterface) => void;
};

export default function Comics({ item, click }: ComicsType) {
  return (
    <div
      key={item.id}
      className="m-3 flex w-4/5 cursor-pointer flex-col items-center rounded-sm bg-[#26294a] p-1 before:content-[''] sm:w-2/5 md:w-1/5"
      onClick={() => click(item)}
    >
      <div className="flex h-28 flex-wrap items-center py-1 text-center">
        <h1 className="text-xl font-bold xl:text-2xl">{item.title}</h1>
      </div>
      <img className="h-full w-full" src={item.imgURL} alt="" />
    </div>
  );
}
