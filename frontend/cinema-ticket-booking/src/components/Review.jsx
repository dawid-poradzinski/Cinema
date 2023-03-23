import { IconCheck, IconStarFilled } from "@tabler/icons-react";
const Review = () => {
    return (
        <div className="flex flex-col bg-zinc-900 border border-zinc-900 rounded-md space-y-4 overflow-hidden">
            <div className="flex flex-col p-4 space-y-4">
                <div className="flex items-center space-x-2">
                    <img className="w-6 h-6 rounded-full" src="profile.jpg" alt="profile" />
                    <p className="text-sm text-zinc-300">dogLover</p>
                </div>
                <div className="flex items-center">
                    <p className="text-xs mr-2">Ocena:</p>
                    <IconStarFilled className="text-yellow-500" size="20" />
                    <IconStarFilled className="text-yellow-500" size="20" />
                    <IconStarFilled className="text-yellow-500" size="20" />
                    <IconStarFilled className="text-yellow-500" size="20" />
                    <IconStarFilled className="text-yellow-500" size="20" />
                </div>
                <p className="text-justify text-zinc-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ad expedita impedit, facilis animi unde? Est, nisi, ullam veniam blanditiis quo obcaecati officiis vel aut pariatur eligendi deleniti, nihil ipsum ab vero quas similique dolorem recusandae ut quia. Quibusdam veniam perferendis accusamus excepturi officiis rerum qui sunt dolore, quidem nemo dolores molestiae mollitia, animi cum nisi pariatur tempore ad odit voluptatum iure. Harum vero nisi esse atque nam alias dolores debitis. Saepe minus, natus dignissimos dolore eligendi magnam fugiat, vero quam ut obcaecati officiis quae ipsa fugit accusamus exercitationem repellat non possimus provident id error earum! Porro illum minus eveniet?</p>
            </div>
            <div className="text-sm bg-zinc-800 p-4 space-y-1.5">
                <p>Oceniono: 20.03.2023</p>
                <div className="flex items-center space-x-1.5">
                    <IconCheck className="text-green-500" size="20" />
                    <p>Ocena potwierdzona obejrzeniem filmu</p>
                </div>

            </div>
        </div>
    );
}

export default Review;