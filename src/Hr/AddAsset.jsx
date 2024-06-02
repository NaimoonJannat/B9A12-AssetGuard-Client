import img from "../assets/HR/addAsset.png"

const AddAsset = () => {

    const handleCreateButton = event =>{
        event.preventDefault();
        const form = event.target;
        const product=form.product.value;
        const quantity=form.quantity.value;
        const type=form.type.value;
       

        const newTask = {product, quantity, type };

        console.log(newTask);
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
                <div className="card shrink-0 p-4 w-full md:w-2/3 bg-[#240570]">
                <section className="p-1 md:p-6">
	<form onSubmit={handleCreateButton} className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md">
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

				<div className="col-span-full">
					<label className="text-base">Product Name</label>
					<input required name="product" type="text" placeholder="Product Name" className="w-full text-gray-500 p-2 rounded-md" />
				</div>
				<div className="col-span-full">
					<label className="text-base">Quantity</label>
					<input required name="quantity" type="number" placeholder="Quantity" className="w-full text-gray-500 p-2 rounded-md  " />
				</div>
                <div className="col-span-full">
					<label required className="text-base">Product Type</label>
					<select name="type" type="text" placeholder="Select Product Type" className="w-full text-gray-500 p-2 rounded-md">

                    <option disabled value="">Select Product Type</option>
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