'use client';

import { useRouter } from 'next/navigation';
import FormJobOffer from '@/components/FormJobOffer/FormJobOffer';
import validationsCreateJobOffer from '@/utils/helpers/validationsCreateJobOffer';

//initial state of form
const initialForm = {
  address: '',
  agreement: false,
  budget: 0,
  category: 'Selecciona una categoría',
  description: '',
  // estimated: 0,
  // tasks: [],
};

//function post new job offer
const post = async (data) => {
  const JSONdata = JSON.stringify(data);
  const endpoint = 'http://localhost:3001/project';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSONdata,
  };
  const response = await fetch(endpoint, options);
  return await response.json();
};

//function submit form
const submitHandler = async (event, form, errors, setErrors) => {
  event.preventDefault();
  try {
    const router = useRouter();
    setErrors(validationsCreateJobOffer(form));
    if (Object.keys(errors).length === 0) {
      await post({
        address: form.address,
        agreement: form.agreement,
        budget: parseInt(form.budget),
        description: form.description,
        category: form.category,
      });
      alert('Tu oferta fue publicada con éxito');
      router.back();
    }
  } catch (error) {
    setErrors({ ...errors, form: error.message });
  }
};

//Component
export default function CreateJobOffer() {
  return (
    <div className="container">
      <FormJobOffer
        initialForm={initialForm}
        submitHandler={submitHandler}
        closeHandler={false}
      />
    </div>
  );
}
