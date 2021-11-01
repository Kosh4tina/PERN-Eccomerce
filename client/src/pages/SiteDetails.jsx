import { Badge, Button} from "@windmill/react-ui";
import { Edit2, Monitor,PlayCircle } from "react-feather";
import Layout from "layout/Layout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import siteService from "services/site.service";
import ConfigurationForm from "components/ConfigurationForm";

const SiteDetails = () =>{
    const { id } = useParams();
    const [ items, setItems ] = useState(null);
    const [ editSettings, setEditSettings ] = useState(false)

    useEffect(() => {
        siteService.getSite(id).then((res) => setItems(res.data));
      }, [id]);
    
    const checkLaunch = () => {
      if(items){
        if(items[0].username){
          if(items[0].email){
            if(items[0].title){
              if(items[0].short_title){
                if(items[0].description){
                  if(items[0].password){
                    console.log(items[0])
                  }else{
                    alert("Provide Site description")
                  }
                }else{
                  alert("Provide Site description")
                }
              }else{
                alert("Provide Short Site title")
              }
            }else{
              alert("Provide Site title")
            }
          }else{
            alert("Provide E-mail adress")
          }
        }else{
          alert("Provide Username")
        }
      }
    }

    return(
    <Layout>{items?.map((item) => (
       <div className="my-4" key={item.site_id}>
          <h1 className="font-bold text-2xl">Details</h1>
          <p>Site no: #{item.site_id}</p>
          <p className="my-2">
          Status: 
          {item.status === 'Not active' ? (
            <Badge type="danger">{item.status}</Badge>
          ):
            <Badge type="success">{item.status}</Badge>
          }
          </p>
          <hr />
       {editSettings ? (
        <ConfigurationForm site={items} setEditSettings={setEditSettings} />
      ) : (
        <div className="grid place-items-center pt-4 mt-10">
          <div className="w-full md:w-3/4 lg:w-1/2 shadow-md overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Site Configuration
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                F5 to change information after save
              </p>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Username
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{item.username}</b>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{item.email}</b>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Title
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{item.title}</b>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Short Title
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{item.short_title}</b>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Description</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{item.description}</b>
                  </dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-red-500">*Redirict</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    <b>{item.redirict}</b>
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5">
                  <Button
                    iconRight={Edit2}
                    onClick={(e) => setEditSettings(!editSettings)}
                  >
                    {" "}
                    Edit
                  </Button>
                  
                  <Button className="mx-8"
                          iconRight={PlayCircle} 
                          onClick={checkLaunch}>
                  Launch
                  </Button>
                  <Button iconRight={Monitor} disabled={true}>*Check statistics</Button>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </div>
    ))}
    </Layout>
    )

}

export default SiteDetails;