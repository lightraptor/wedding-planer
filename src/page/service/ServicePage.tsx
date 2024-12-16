import { Link } from "react-router-dom";
import { SERVICES } from "../../defines";

export const ServicePage = () => {
  return (
    <>
      <div className="p-10 md:p-15 lg:p-52 text-center font-customRegular text-[32px] text-primary">
        {Object.values(SERVICES).map((service) => {
          return (
            <Link to={service.path}>
              <p className="pb-10 cursor-pointer tracking-[0.1em]">
                {service.label}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
};
