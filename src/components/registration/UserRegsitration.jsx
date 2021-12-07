import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import Input from "../common/Input";

const schema = Joi.object({
  username: Joi.string().required().label("Username"),
  mobile: Joi.string().required().max(10).label("Mobile"),
  address: Joi.string().required().label("Address"),
  password: Joi.string().label("Password").required(),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .label("Confirm Password")
    .options({ messages: { "any.only": "Password does not match" } }),
});

function UserRegsitration() {
  //UseForm for getting uerData and form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  //Get userdata if valid and post data to server
  const submitRegisterationForm = (data) => {
    console.log(data);
  };

  //render jsx
  return (
    <div>
      <div className="row justify-content-center ">
        <div className="col-md-4 col-sm-4 col-xlg-4 col-12 card p-4 mt-3">
          <div className="display-6 mb-2">Registration New User</div>
          <form onSubmit={handleSubmit(submitRegisterationForm)}>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              register={register}
              errors={errors}
            />
            <Input
              type="text"
              name="mobile"
              placeholder="Mobile"
              register={register}
              errors={errors}
            />
            <Input
              type="text"
              name="address"
              placeholder="Address"
              register={register}
              errors={errors}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              register={register}
              errors={errors}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              register={register}
              errors={errors}
            />
            <input className="btn btn-primary" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserRegsitration;
