import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [captchaCorrect, setCaptchaCorrect] = useState(false);

  const captchaHandler = (value) => {
    console.log("Captcha value:", value);
    setCaptchaCorrect(true);
  };

  return (
    <div>
      Captcha
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="firstName"
            {...register("firstName", { required: true, max: 10, min: 2 })}
          />
          {errors.firstName && <p>errory</p>}

          <ReCAPTCHA
            sitekey="6LdJIsYgAAAAAAloSgEtrHcCFFL4RHgu2jESsUnK"
            onChange={captchaHandler}
          />
          <input type="submit" disabled={!captchaCorrect} />
        </form>
      </div>
    </div>
  );
};

export default Captcha;
