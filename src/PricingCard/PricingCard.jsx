import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { name, price, description, features } = pricing;

  return (
    <div className="flex flex-col border bg-amber-500 rounded-2xl p-4">
      {/* card header */}
      <div>
        <h1 className="text-4xl">{name}</h1>
        <h1 className="text-2xl">${price}/month</h1>
      </div>
      {/* card body */}
      <div className="flex-1">
        <p className="bg-amber-400 p-3 rounded-md mt-3 text-shadow-orange-50">
          {description}
        </p>
        <div className="bg-yellow-600 p-2 mt-4 rounded-3xl">
          {features.map((feature, idx) => (
            <PricingFeature key={idx} feature={feature}></PricingFeature>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-wide mt-3">Subscribe</button>
      </div>
    </div>
  );
};

export default PricingCard;
