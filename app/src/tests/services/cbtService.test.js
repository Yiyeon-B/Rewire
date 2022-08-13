import axios from "axios";
import {BASE_URL, getAllThoughts, saveThought} from "../../services/cbtService";
import { waitFor } from "@testing-library/react";

jest.mock("axios");

describe("postThought", () => {
    describe("when thought is sent to cbtService ", function () {
        it('should save first thought', async () => {
            //Given
            const values = {firstThought: "first", secondThought: "second", thirdThought: "third", fourthThought: "fourth"};
            axios.post.mockResolvedValueOnce(values);

            // When
            const result = await saveThought(values);

            //Then
            await waitFor(() => expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/api/cbt`, values));
            await waitFor(() => expect(result).toEqual(values));
        });
        it('Should not save first thought if error', async () => {
            //Given
            const values = {firstThought: "first", secondThought: "second", thirdThought: "third", fourthThought: "fourth"};
            axios.post.mockRejectedValueOnce(values);

            // When
            const result = await saveThought(values);

            //Then
            await waitFor(() => expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}/api/cbt`, values));
            await waitFor(() => expect(result).toEqual([]));
        });
    });
});

describe("getThought", () => {
    describe("when previously submitted thought is requested", function () {        
        it("should retreive all the thoughts", async () => {
            const values = {firstThought: "first", secondThought: "second", thirdThought: "third", fourthThought: "fourth"};
            axios.get.mockImplementation(() => Promise.resolve({status: 200, data: values}));
            const data = await getAllThoughts();
            console.log(data);
            await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
            await waitFor(() => expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/api/cbt`));
            await waitFor(() => expect(data).toEqual(values));

        });
    });
});
