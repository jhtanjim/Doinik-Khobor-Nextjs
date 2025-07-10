export const fetchNews=async(category:string="",search:string=""):Promise<any[]>=>{
  try {
    const res=await fetch(`http://localhost:3000/data/db.json/?category=${category}&search=${search}`, );
    
    if(!res.ok){
        throw new Error("Failed to fetch news");
    }
    const data=await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
