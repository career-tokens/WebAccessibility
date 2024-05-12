/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
"use client";
import BackHome from "@/components/ui/backhome";
import React, { useState, FormEvent } from "react";

const AccessibleForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [country, setCountry] = useState<string>("India");
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const validEmail = (): boolean => {
    const mailformat: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return mailformat.test(email) || !email ? true : false;
  };

  const activeSubmit = () => {
    return name && email && validEmail() && gender && country;
  };

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setShowMessage(true);
  };

  return (
    <div className="main h-screen flex flex-col justify-evenly items-center gap-y-5 p-6">
      <BackHome />
      <h1
        className="text-lg bg-blue-600  text-white px-5 py-3 rounded-lg sm:w-[70%] w-[95%]"
        tabIndex={0}
      >
        Here we will see an accessible form. Make sure to read about its
        properties in the blog (link to that in the home page). Also make sure
        to view the code on github.
      </h1>
      <h1 className="text-2xl" tabIndex={0}>
        Accessible Form
      </h1>
      <form
        className="bg-white z-[500] p-3 text-lg flex flex-col gap-y-3 border-black border-2 rounded-md"
        onSubmit={onSubmit}
      >
        <div className="name flex flex-col gap-y-2">
          <label htmlFor="name">
            Full Name
            <span className="text-red-400">*</span>
          </label>
          <input
            className="p-1 focus:bg-blue-200 rounded bg-blue-100"
            type="text"
            id="name"
            onChange={(e) => {
              setShowMessage(false);
              setName(e.target.value);
            }}
            required
            aria-required={true}
            aria-describedby="name-description"
          />
          <p
            className="bg-green-100 text-green-900 text-base py-1 px-2"
            id="name-description"
          >
            Include your middle name if you have one
          </p>
        </div>
        <div className="email flex flex-col gap-y-2">
          <label htmlFor="email">
            Email
            <span className="text-red-400">*</span>
          </label>
          <input
            className="p-1 focus:bg-blue-200 rounded bg-blue-100"
            type="email"
            id="email"
            onChange={(e) => {
              setShowMessage(false);
              setEmail(e.target.value);
            }}
            required
            aria-required={true}
            aria-invalid={!validEmail()}
          />
          {!validEmail() && (
            <div
              className="bg-red-100 text-red-600 text-base rounded px-2 py-1"
              aria-atomic={true}
              aria-live="polite"
            >
              Please enter a valid email <br />
              {email} is not a valid email
            </div>
          )}
        </div>
        <div
          className="gender-select"
          role="group"
          aria-labelledby="gender"
          tabIndex={0}
        >
          <p className="mb-2" id="gender">
            Enter your Gender
            <span className="text-red-400">*</span>
          </p>
          <div className="choice1 flex gap-x-1">
            <input
              type="radio"
              name="male"
              id="male"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => {
                setShowMessage(false);
                setGender(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  setShowMessage(false);
                  setGender("Male");
                }
              }}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="choice2 flex gap-x-1">
            <input
              type="radio"
              name="female"
              id="female"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => {
                setShowMessage(false);
                setGender(e.target.value);
              }}
              //since we want to keep the form fully accessible using keyboard as well
              //so we are also allowing to select the radio using enter on
              //navigating to it using Tab
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setShowMessage(false);
                  e.preventDefault();
                  setGender("Female");
                }
              }}
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="select flex flex-col gap-y-2">
          <label htmlFor="select-country">
            Select your country
            <span className="text-red-400">*</span>
          </label>
          <select
            className="focus:bg-blue-200 rounded bg-blue-100 px-2 py-1"
            name="country"
            id="select-country"
            onChange={(e) => {
              setShowMessage(false);
              setCountry(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Germany">Germany</option>
          </select>
        </div>
        <div className="btn flex justify-center">
          <button
            className="w-fit px-2 py-1 rounded-lg disabled:bg-purple-400 text-white bg-purple-600"
            type="submit"
            disabled={!activeSubmit()}
            aria-disabled={!activeSubmit()}
          >
            Submit
          </button>
        </div>
      </form>
      {showMessage && (
        <div
          className="bg-green-300 text-green-900 p-3 border-green-900"
          aria-live="polite"
          aria-atomic={true}
        >
          Your details are submitted.
        </div>
      )}
    </div>
  );
};

export default AccessibleForm;
