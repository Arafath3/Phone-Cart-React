import PropTypes from "prop-types";
import Phone from "../PhoneCard/PhoneCard";

const Phones = ({ phones }) => {
  return (
    <div className="py-10">
      <h1 className="text-xl font-medium text-center">All Categories</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 py-10">
        {phones?.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
    </div>
  );
};
Phones.propTypes = {
  phones: PropTypes.array.isRequired,
};

export default Phones;
