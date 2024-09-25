interface Category {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

interface Pet {
  id: number;
  category: Category;
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: string;
}

fetch("https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available")
  .then((response: Response) => {
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  })
  .then((data: Pet[]) => {
    console.log(data);
  })
  .catch((error: Error) => {
    console.error(error);
  });
