import CategoryBar from '@/components/Menu/CategoryBar';
import MenuItem from '@/components/Menu/MenuItem';
import Stepper from '@/components/Stepper';
import { getMenu } from '@/services';

async function Menus({ params }: { params: { id: string } }) {
    const menuData = await getMenu();
    return (
        <div>
            <Stepper />
            {/* <h2>Menu {params.id}</h2> */}
            <CategoryBar />
            <div className="grid px-2 pb-[60px] mt-[30px] grid-cols-1 md:grid-cols-3 gap-2 lg:gap-8">
                {menuData.map(
                    (ele: {
                        id: string;
                        foodName: string;
                        price: string;
                        description: string;
                        categorieId: number;
                        image: null;
                        status: number;
                        createdAt: string;
                        updatedAt: string;
                        categorieData: {
                            categoryName: string;
                        };
                    }) => (
                        <MenuItem key={ele.id} dishData={ele} />
                    ),
                )}
            </div>
        </div>
    );
}

export default Menus;
