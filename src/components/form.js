import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("Driver Name:", { required: true })}>
      </select>
      <input type="text" placeholder="Is the trip for someone specific?" {...register("Is the trip for someone specific?", {, maxLength: 100})} />
      <select {...register("Where are you right now?", { required: true })}>
      </select>
      <select {...register("Where are you headed to?", { required: true })}>
      </select>
      <input type="text" placeholder="Key Tag Photo" {...register("Key Tag Photo", {required: true})} />
      <input type="text" placeholder="Stock Number" {...register("Stock Number", {required: true})} />
      <input type="number" placeholder="Last Eight of the VIN number:" {...register("Last Eight of the VIN number:", {required: true})} />
      <select {...register("Did you get gas on this trip?", { required: true })}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <select {...register("If applicable, how much was the toll?", { required: true })}>
      </select>

      <input type="submit" />
    </form>
  );
}
