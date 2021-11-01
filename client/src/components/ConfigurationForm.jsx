import API from "api/axios.config";
import { Button, Input, Label } from "@windmill/react-ui";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PulseLoader from "react-spinners/PulseLoader";

const ConfigurationForm = ({ setEditSettings, site }) => {
  
  const { register, handleSubmit, setValue } = useForm();
  const [setSiteEdit] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const updateSiteData = async ({
    username, 
    email, 
    title, 
    short_title, 
    description, 
    redirict,
    password
  }) => {
    const res = await API.put(`/site/${site[0].site_id}`, { 
      username, 
      email, 
      title, 
      short_title, 
      description, 
      redirict,
      password
    });
    setSiteEdit(res.data);
  };

  useEffect(() => {
    setValue("username", site[0].username);
    setValue("email", site[0].email);
    setValue("title", site[0].title);
    setValue("short_title", site[0].short_title);
    setValue("description", site[0].description);
    setValue("redirict", site[0].redirict);
    setValue("password", site[0].password);
    
  }, [setValue, site]);

  const onSubmit = async (data) => {
    setIsSaving(true);
    try {
      setIsSaving(false);
      setEditSettings(false);
      await updateSiteData(data);
      
    } catch (error) {
      setIsSaving(false);
    }
  };

  return (
    <section className="grid place-items-center pt-4 mt-10">
      <div className="w-full md:w-1/2 shadow-md overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 capitalize">
            Edit settings
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border-t border-gray-200 grid grid-cols-1"
        >
          <Label className="bg-gray-50 px-4 py-5">
            <span className="text-sm font-medium text-gray-500 w-1/4">
              Username
            </span>
            <Input
              name="username"
              maxLength="50"
              minLength="4"
              ref={register}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </Label>
          <Label className="bg-white px-4 py-5 ">
            <span className="text-sm font-medium text-gray-500">Email</span>
            <Input
              name="email"
              maxLength="100"
              type="email"
              ref={register}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
            
          </Label>
          <Label className="bg-white px-4 py-5 ">
            <span className="text-sm font-medium text-gray-500">Password</span>
            <Input
              name="password"
              maxLength="200"
              type="password"
              ref={register}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
            
          </Label>
          <div className="bg-gray-50 px-4 py-5 ">
            <span className="text-sm font-medium text-gray-500">
              Title
            </span>
            <Input
              name="title"
              maxLength="10"
              minLength="3"
              ref={register}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="bg-white px-4 py-5 ">
            <span className="text-sm font-medium text-gray-500">Short Title</span>
            <Input
              name="short_title"
              maxLength="3"
              minLength="1"
              ref={register}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="bg-gray-50 px-4 py-5 ">
            <span className="text-sm font-medium text-gray-500">Description</span>
            <Input
              name="description"
              maxLength="200"
              minLength="10"
              ref={register}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="bg-gray-50 px-4 py-5 ">
            <span className="text-sm font-medium text-gray-500">*Redirict</span>
            <Input
              name="redirict"
              disabled={true}
              ref={register}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            />
          </div>
          <div className="px-4 py-5 space-x-4">
          <Button disabled={isSaving} type="submit">
              {isSaving ? (
                <PulseLoader color={"#0a138b"} size={10} loading={isSaving} />
              ) : (
                "Save"
              )}
            </Button>
            <Button
              disabled={isSaving}
              onClick={() => setEditSettings(false)}
              layout="outline"
            >
              Back
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ConfigurationForm;
