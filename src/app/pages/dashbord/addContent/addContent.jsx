import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addContentData } from '../../../redux/thunk/addContentData'

const AddContent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const dispath = useDispatch()
  const onSubmit = (data) => {
    dispath(
      addContentData({
        ...data,
        date: new Date().toISOString().slice(0, 10),
        time: new Date().toLocaleTimeString(),
      })
    )
  }

  console.log(watch('example'))
  return (
    <div className=" flex justify-center items-center ">
      <div className="  w-4/5	 bg-white    rounded-md ">
        <h1 className=" mt-12 px-4 font-bold text-xl">Add Content</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" grid-cols-1 grid md:grid-cols-2  gap-4">
            <div className=" mb-4 px-8 py-4">
              <label htmlFor="" className=" w-full  text-xl">
                Title
              </label>
              <input
                type="text"
                className="input input-primary w-full input-md  "
                placeholder=" Entetr Title "
                name="title"
                id=""
                {...register('title')}
              />
            </div>
            <div className=" mb-4 px-8 py-4">
              <label htmlFor="" className=" w-full  text-xl">
                Author
              </label>
              <input
                type="text"
                className="input input-primary w-full input-md  "
                placeholder=" Entetr Title "
                name="title"
                id=""
                {...register('author')}
              />
            </div>
            <div className=" mb-4 px-8 py-4 grid-cols-2 grid gap-3">
              <div>
                <label htmlFor="" className=" w-full  text-xl">
                  Company Name
                </label>
                <input
                  type="text"
                  className="input input-primary w-full input-md  "
                  placeholder=" Entetr Title "
                  name="title"
                  id=""
                  {...register('CompanyName')}
                />
              </div>
              <div>
                <label htmlFor="" className=" w-full  text-xl">
                  designation
                </label>
                <input
                  type="text"
                  className="input input-primary w-full input-md  "
                  placeholder=" Entetr Title "
                  name="title"
                  id=""
                  {...register('designation')}
                />
              </div>
            </div>
            <div className=" mb-4 px-8 py-4">
              <label htmlFor="" className=" w-full  text-xl">
                Image Url
              </label>
              <input
                type="text"
                className="input input-primary w-full input-md  "
                placeholder=" Entetr Title "
                name="title"
                id=""
                {...register('imageUrl')}
              />
            </div>
            <div className=" mb-4 px-8 py-4">
              <label htmlFor="" className=" w-full  text-xl">
                Discription
              </label>
              <textarea
                type="text"
                className=" textarea textarea-primary h-24 w-full input-md  "
                placeholder=" Entetr Title "
                name="title"
                id=""
                {...register('discription')}
              />
            </div>
            <div className=" mb-4 px-8 py-4">
              <div className="mb-2">
                <label htmlFor="" className=" w-full  text-xl">
                  Topic
                </label>
                <input
                  type="text"
                  className=" textarea textarea-primary  w-full input-md  "
                  placeholder=" Entetr Title "
                  name="title"
                  id=""
                  {...register('topic')}
                />
              </div>
              <label htmlFor="" className=" w-full  text-sm">
                Set Color
              </label>
              <input
                type="color"
                className=" textarea textarea-primary  w-full input-md  "
                placeholder=" Entetr Title "
                name="title"
                id=""
                {...register('colorCode')}
              />
            </div>
            <div className=" mb-4 px-8 py-4"></div>
            <div className=" mb-4 px-8 py-4"></div>
            <div className="  flex justify-end  mb-4"></div>
            <div className="  flex justify-end  mb-4">
              <input
                type="submit"
                className="    btn   mr-8  bg-indigo-700 hover:bg-indigo-400 border-none  text-white  "
                placeholder=" Entetr Title "
                name="title"
                id=""
                value={'Add Content'}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddContent
