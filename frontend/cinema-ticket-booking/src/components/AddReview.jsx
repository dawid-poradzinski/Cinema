import { IconStar } from "@tabler/icons-react";
const AddReview = () => {
    return (
        <div className="flex flex-col relative border-2 border-gray-500 bg-zinc-700 border-dashed p-4 rounded-md">
            <p className="text-2xl mb-5 text-center">Dodaj opinię</p>
            <div className="flex">
                <p className="mr-2">Ocena:</p>
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
            </div>
            <p className="mt-4 mb-1">Recenzja (opcjonalnie):</p>
            <textarea className="h-40" />
            <div className="customButton mt-3 bg-green-700 flex items-center justify-center">Prześlij opinię</div>
            <div className="z-0 absolute top-0 left-0 h-full w-full bg-zinc-900/90 flex items-center justify-center p-10 text-center">
                <p>Opcja tylko dla zalogowanych użytkowników</p>
            </div>
        </div>
    );
}

export default AddReview;