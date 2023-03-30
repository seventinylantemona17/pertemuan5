
function card() {
    return (
        <>
         <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-500 to-blue-600">
            <div class="w-1/2 h-4/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
                    KTP
                </h1>
                <form action="/" method="post">
                    <div class="flex flex-col mb-4">
                        <label
                         class="mb-2 font-bold text-lg text-gray-900"
                         for="tempat_lahir"
                        >
                            Foto
                        </label>
                        <img src={process.env.PUBLIC_URL + '/seventiny.jpg'} class="flex flex-col mb-1 w-40 h-60" />
                    </div>
                    
                    <div class="flex flex-col mb-4">
                        <label
                         class="mb-2 font-bold text-lg text-gray-900"
                         for="nama"
                        >
                            Nama
                        </label>
                        <input
                         class="border py-2 px-3 text-grey-800"
                         type="text"placeholder="Seventiny Lantemona"
                         name="nama"
                         id="nama"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                         class="mb-2 font-bold text-lg text-gray-900"
                         for="alamat"
                        >
                            Alamat
                        </label>
                        <input
                         class="border py-2 px-3 text-lg text-gray-900"
                         type="text"placeholder="Tawoali"
                         name="alamat"
                         id="alamat"
                        />
                    </div>
                    <div class="flex flex-col mb-4">
                        <label
                         class="mb-2 font-bold text-lg text-gray-900"
                         for="jenis_kelamin"
                        >
                            Jenis Kelamin
                        </label>
                        <input
                         class="border py-2 px-3 text-lg text-gray-900"
                         type="text"placeholder="Perempuan"
                         name="jenis_kelamin"
                         id="jenis_kelamin"
                        />
                    </div>
                </form>
            </div>
         </div>
        </>
    );
}

export default card;