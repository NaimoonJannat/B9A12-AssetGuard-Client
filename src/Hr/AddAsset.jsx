import Swal from "sweetalert2";
import img from "../assets/HR/addAsset.png"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddAsset = () => {

    const {user} = useContext(AuthContext);

    const handleCreateButton = event =>{
        event.preventDefault();
        const form = event.target;
        const product=form.product.value;
        const quantity=form.quantity.value;
        const type=form.type.value;
        const hrEmail= user.email;

        // Determine availability based on quantity
        const availability = quantity > 0 ? "available" : "out of stock";
        
        // Get the current date in YYYY-MM-DD format
        const addedDate = new Date().toISOString().split('T')[0];

        const newAsset = { product, quantity, type, addedDate, availability, hrEmail };

        console.log(newAsset);

         // send data to the server 
         fetch('https://b9a12-assetguard-server.vercel.app/assets',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newAsset)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                    title: "Success!",
                    text: "Asset Added Successfully",
                    icon: "success",
                    confirmButtonText: 'Ok'
                  });
                  form.reset();
            
        })
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:gap-8 lg:flex-row">
                <div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add An Asset</h1>
                        <p className="py-6">
                        Empower your team and enhance productivity by adding new assets today!
                        </p>
                    </div>
                    <img
                        className="hidden lg:flex rounded-lg"
                        src={img}
                        alt=""
                    />
                </div>
                <div className="card shrink-0 p-4 w-full md:w-2/3 bg-[#240750]">
                <section className="p-1 md:p-6">
	<form onSubmit={handleCreateButton} className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

				<div className="col-span-full">
					<label className="text-base text-white">Product Name</label>
					<input required name="product" type="text" placeholder="Product Name" className="w-full text-gray-500 p-2 rounded-md" />
				</div>
				<div className="col-span-full">
					<label className="text-base text-white">Quantity</label>
					<input required name="quantity" type="number" placeholder="Quantity" className="w-full text-gray-500 p-2 rounded-md  " />
				</div>
                <div className="col-span-full">
					<label required className="text-base text-white">Product Type</label>
					<select name="type" type="text" placeholder="Select Product Type" className="w-full text-gray-500 p-2 rounded-md">

                    <option value=""  disabled selected>Select Product Type</option>
                    <option value="returnable">Returnable</option>
                    <option value="non-returnable">Non-Returnable</option>
                    </select>
				</div>
                
                
                <div className="col-span-full">
<input type="submit" className="btn w-full bg-[#57A6A1] mt-8" value="Add"></input>
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

export default AddAsset;