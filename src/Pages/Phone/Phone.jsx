import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhonesCard from "./PhonesCard";

const Phone = () => {
  const [phone, usePhone] = useState({});

  const { id } = useParams();
  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);
    usePhone(findPhone);
  }, [id, phones]);

  return (
    <div>
      <PhonesCard phone={phone}></PhonesCard>
    </div>
  );
};

export default Phone;
