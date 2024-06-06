import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAssetCard = () => {
    const assets = useLoaderData();
    const {_id, product, quantity, type, addedDate} = assets;
    
    const navigate = useNavigate();

    const handleUpdateButton = event =>{
        event.preventDefault();
        const form = event.target;
        
        const product=form.product.value;
        const quantity=form.quantity.value;
        const type=form.type.value;

        // Determine availability based on quantity
        const availability = quantity > 0 ? "available" : "out of stock";
        
        // Get the current date in YYYY-MM-DD format
        // const addedDate = new Date().toISOString().split('T')[0];

        const updatedAsset = { product, quantity, type, addedDate, availability };

        console.log(updatedAsset);

         // send data to the server 
         fetch(`http://localhost:3000/assets/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedAsset)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                    title: "Success!",
                    text: "Assignment updated successfully",
                    icon: "success",
                    confirmButtonText: 'cool'
                  });
                  navigate("/asset-list");
            
        })
    }

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:gap-8 lg:flex-row">
            <div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Asset</h1>
                    <p className="py-6">
                    Empower your team and enhance productivity by adding new assets today!
                    </p>
                </div>
            </div>
            <div className="card shrink-0 p-4 w-full md:w-2/3 bg-[#240750]">
            <section className="p-1 md:p-6">
<form onSubmit={handleUpdateButton} className="container flex flex-col mx-auto space-y-12">
    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

            <div className="col-span-full">
                <label className="text-base text-white">Product Name</label>
                <input required defaultValue={product} name="product" type="text" placeholder="Product Name" className="w-full text-gray-500 p-2 rounded-md" />
            </div>
            <div className="col-span-full">
                <label className="text-base text-white">Quantity</label>
                <input required defaultValue={quantity} name="quantity" type="number" placeholder="Quantity" className="w-full text-gray-500 p-2 rounded-md  " />
            </div>
            <div className="col-span-full">
                <label required className="text-base text-white">Product Type</label>
                <select name="type" type="text" defaultValue={type} placeholder="Select Product Type" className="w-full text-gray-500 p-2 rounded-md">

                <option value=""  disabled selected>Select Product Type</option>
                <option value="returnable">Returnable</option>
                <option value="non-returnable">Non-Returnable</option>
                </select>
            </div>
            
            
            <div className="col-span-full">
<input type="submit" className="btn w-full bg-[#57A6A1] mt-8" value="Update"></input>
</div>
        </div>
        
    </fieldset>
   
</form>
</section>
                
                
            </div>
        </div>
    </div>
    );
};

export default UpdateAssetCard;