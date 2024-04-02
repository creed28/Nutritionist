import caloriesImage from "../assets/calories.png";
import carbsImage from "../assets/carbs.png";
import proteinImage from "../assets/protein.png";
import fatImage from "../assets/fat.png";
import useFoodsContext from "../hooks/useFoodsContext";

const TotalCard = () => {
  const { calTotal, proteinTotal, carbsTotal, fatTotal } = useFoodsContext();
  
  return (
    <section className="flex justify-center gap-x-6 bg-[#fae85e] p-4 rounded">
      <div className="flex gap-x-2 items-center">
        <img src={caloriesImage} alt="calories" className="w-[40px]" />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold uppercase font-Rounded1c">total</h3>
          <p className="text-[0.8rem]">{calTotal} cals</p>
        </div>
      </div>
      <div className="flex gap-x-2 items-center">
        <img src={carbsImage} alt="carbs" className="w-[40px]" />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold uppercase font-Rounded1c">carbs</h3>
          <p className="text-[0.8rem]">{carbsTotal}g</p>
        </div>
      </div>
      <div className="flex gap-x-2 items-center">
        <img src={proteinImage} alt="protein" className="w-[40px]" />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold uppercase font-Rounded1c">protein</h3>
          <p className="text-[0.8rem]">{proteinTotal}g</p>
        </div>
      </div>
      <div className="flex gap-x-2 items-center">
        <img src={fatImage} alt="fat" className="w-[40px]" />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold uppercase font-Rounded1c">fat</h3>
          <p className="text-[0.8rem]">{fatTotal}g</p>
        </div>
      </div>
    </section>
  );
}

export default TotalCard;
