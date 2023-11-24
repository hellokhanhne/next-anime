import {
  Anime,
  AnimeEpisodeStreaming,
  AnimeInfo,
  RecentAnime,
} from "@/src/types/anime";
import { AnimeResponse, SearchAdvancedQuery } from "@/src/types/utils";
import client from "@/src/utils/client";
import { convertQueryArrayParams } from "../utils/contants";
import axios from "axios";
import { Streaming } from "../types/amvstr";
import prisma from "../lib/prisma";
import { getNewestComment } from "./comment";

export const default_provider = "gogoanime";

export const getRecentAnime = async (limit: number = 20, page: number = 1) => {
  const response = await client.get<AnimeResponse<RecentAnime>>(
    "/recent-episodes",
    {
      params: {
        page: page,
        perPage: limit,
        provider: default_provider,
      },
    }
  );

  return response.data.results;
};

export const getTrendingAnime = async (
  limit: number = 20,
  page: number = 1
) => {
  const response = await client.get<AnimeResponse<Anime>>("/trending", {
    params: {
      page,
      perPage: limit,
      provider: default_provider,
    },
  });

  return response.data.results;
};

export const getTopAiring = async (limit: number = 20, page: number = 1) => {
  const response = await client.get<AnimeResponse<Anime>>("/airing-schedule", {
    params: {
      page,
      perPage: limit,
      provider: default_provider,
    },
  });

  return response.data.results;
};

export const getMostPopular = async (limit: number = 20, page: number = 1) => {
  const response = await client.get<AnimeResponse<Anime>>("/popular", {
    params: {
      page,
      perPage: limit,
      provider: default_provider,
    },
  });

  return response.data.results;
};

export const searchAdvanced = async (queries?: SearchAdvancedQuery) => {
  const response = await client.get<AnimeResponse<Anime>>("/advanced-search", {
    params: {
      ...queries,
      provider: default_provider,
    },
  });

  return response.data;
};

export const getAnimeInfo = async (
  id: string,
  provider: string = default_provider
) => {
  try {
    // const response = await client.get<AnimeInfo>(`/info/${id}`, {
    //   params: {
    //     provider,
    //   },
    // });

    const response = await axios.get<any>(
      "http://localhost:4001/anime/gogoanime/info/ninjala?provider=gogoanime"
    );

    console.log("getAnimeInfo", response);

    return response.data;
  } catch (error) {
    console.log("getAnimeInfo", error);
    return {
      id: "ninjala",
      title: "Ninjala",
      url: "https://gogoanimehd.io/category/ninjala",
      genres: ["Action"],
      totalEpisodes: 95,
      image: "https://gogocdn.net/cover/ninjala.png",
      releaseDate: "2020",
      description:
        "The year is 20XX. The ninja, who once forged the history of Japan, were scattered across the country during the Meiji Restoration. As these ninja mingled with the other clans, their bloodline thinned, and they gradually faded from sight. The descendants of these ninja clans, seeking to preserve their heritage, formed the WNA (World Ninja Association) in the hope of carrying on their legacy. And so it was that the WNA succeeded in developing Ninja-Gum, an art which could summon forth the strength of the Shinobi. And yet creating the most powerful Ninja-Gum requires the strongest of ninja DNA. So it was that the Ninjala Tournament was held, that the mightiest of all ninjas could be found...",
      subOrDub: "sub",
      type: "TV SERIES",
      status: "Completed",
      otherName: "",
      episodes: [
        {
          id: "ninjala-episode-1",
          number: 1,
          url: "https://gogoanimehd.io//ninjala-episode-1",
        },
        {
          id: "ninjala-episode-2",
          number: 2,
          url: "https://gogoanimehd.io//ninjala-episode-2",
        },
        {
          id: "ninjala-episode-3",
          number: 3,
          url: "https://gogoanimehd.io//ninjala-episode-3",
        },
        {
          id: "ninjala-episode-4",
          number: 4,
          url: "https://gogoanimehd.io//ninjala-episode-4",
        },
        {
          id: "ninjala-episode-5",
          number: 5,
          url: "https://gogoanimehd.io//ninjala-episode-5",
        },
        {
          id: "ninjala-episode-6",
          number: 6,
          url: "https://gogoanimehd.io//ninjala-episode-6",
        },
        {
          id: "ninjala-episode-7",
          number: 7,
          url: "https://gogoanimehd.io//ninjala-episode-7",
        },
        {
          id: "ninjala-episode-8",
          number: 8,
          url: "https://gogoanimehd.io//ninjala-episode-8",
        },
        {
          id: "ninjala-episode-9",
          number: 9,
          url: "https://gogoanimehd.io//ninjala-episode-9",
        },
        {
          id: "ninjala-episode-10",
          number: 10,
          url: "https://gogoanimehd.io//ninjala-episode-10",
        },
        {
          id: "ninjala-episode-11",
          number: 11,
          url: "https://gogoanimehd.io//ninjala-episode-11",
        },
        {
          id: "ninjala-episode-12",
          number: 12,
          url: "https://gogoanimehd.io//ninjala-episode-12",
        },
        {
          id: "ninjala-episode-13",
          number: 13,
          url: "https://gogoanimehd.io//ninjala-episode-13",
        },
        {
          id: "ninjala-episode-14",
          number: 14,
          url: "https://gogoanimehd.io//ninjala-episode-14",
        },
        {
          id: "ninjala-episode-15",
          number: 15,
          url: "https://gogoanimehd.io//ninjala-episode-15",
        },
        {
          id: "ninjala-episode-16",
          number: 16,
          url: "https://gogoanimehd.io//ninjala-episode-16",
        },
        {
          id: "ninjala-episode-17",
          number: 17,
          url: "https://gogoanimehd.io//ninjala-episode-17",
        },
        {
          id: "ninjala-episode-18",
          number: 18,
          url: "https://gogoanimehd.io//ninjala-episode-18",
        },
        {
          id: "ninjala-episode-19",
          number: 19,
          url: "https://gogoanimehd.io//ninjala-episode-19",
        },
        {
          id: "ninjala-episode-20",
          number: 20,
          url: "https://gogoanimehd.io//ninjala-episode-20",
        },
        {
          id: "ninjala-episode-21",
          number: 21,
          url: "https://gogoanimehd.io//ninjala-episode-21",
        },
        {
          id: "ninjala-episode-22",
          number: 22,
          url: "https://gogoanimehd.io//ninjala-episode-22",
        },
        {
          id: "ninjala-episode-23",
          number: 23,
          url: "https://gogoanimehd.io//ninjala-episode-23",
        },
        {
          id: "ninjala-episode-24",
          number: 24,
          url: "https://gogoanimehd.io//ninjala-episode-24",
        },
        {
          id: "ninjala-episode-25",
          number: 25,
          url: "https://gogoanimehd.io//ninjala-episode-25",
        },
        {
          id: "ninjala-episode-26",
          number: 26,
          url: "https://gogoanimehd.io//ninjala-episode-26",
        },
        {
          id: "ninjala-episode-27",
          number: 27,
          url: "https://gogoanimehd.io//ninjala-episode-27",
        },
        {
          id: "ninjala-episode-28",
          number: 28,
          url: "https://gogoanimehd.io//ninjala-episode-28",
        },
        {
          id: "ninjala-episode-29",
          number: 29,
          url: "https://gogoanimehd.io//ninjala-episode-29",
        },
        {
          id: "ninjala-episode-30",
          number: 30,
          url: "https://gogoanimehd.io//ninjala-episode-30",
        },
        {
          id: "ninjala-episode-31",
          number: 31,
          url: "https://gogoanimehd.io//ninjala-episode-31",
        },
        {
          id: "ninjala-episode-32",
          number: 32,
          url: "https://gogoanimehd.io//ninjala-episode-32",
        },
        {
          id: "ninjala-episode-33",
          number: 33,
          url: "https://gogoanimehd.io//ninjala-episode-33",
        },
        {
          id: "ninjala-episode-34",
          number: 34,
          url: "https://gogoanimehd.io//ninjala-episode-34",
        },
        {
          id: "ninjala-episode-35",
          number: 35,
          url: "https://gogoanimehd.io//ninjala-episode-35",
        },
        {
          id: "ninjala-episode-36",
          number: 36,
          url: "https://gogoanimehd.io//ninjala-episode-36",
        },
        {
          id: "ninjala-episode-37",
          number: 37,
          url: "https://gogoanimehd.io//ninjala-episode-37",
        },
        {
          id: "ninjala-episode-38",
          number: 38,
          url: "https://gogoanimehd.io//ninjala-episode-38",
        },
        {
          id: "ninjala-episode-39",
          number: 39,
          url: "https://gogoanimehd.io//ninjala-episode-39",
        },
        {
          id: "ninjala-episode-40",
          number: 40,
          url: "https://gogoanimehd.io//ninjala-episode-40",
        },
        {
          id: "ninjala-episode-41",
          number: 41,
          url: "https://gogoanimehd.io//ninjala-episode-41",
        },
        {
          id: "ninjala-episode-42",
          number: 42,
          url: "https://gogoanimehd.io//ninjala-episode-42",
        },
        {
          id: "ninjala-episode-43",
          number: 43,
          url: "https://gogoanimehd.io//ninjala-episode-43",
        },
        {
          id: "ninjala-episode-44",
          number: 44,
          url: "https://gogoanimehd.io//ninjala-episode-44",
        },
        {
          id: "ninjala-episode-45",
          number: 45,
          url: "https://gogoanimehd.io//ninjala-episode-45",
        },
        {
          id: "ninjala-episode-46",
          number: 46,
          url: "https://gogoanimehd.io//ninjala-episode-46",
        },
        {
          id: "ninjala-episode-47",
          number: 47,
          url: "https://gogoanimehd.io//ninjala-episode-47",
        },
        {
          id: "ninjala-episode-48",
          number: 48,
          url: "https://gogoanimehd.io//ninjala-episode-48",
        },
        {
          id: "ninjala-episode-49",
          number: 49,
          url: "https://gogoanimehd.io//ninjala-episode-49",
        },
        {
          id: "ninjala-episode-50",
          number: 50,
          url: "https://gogoanimehd.io//ninjala-episode-50",
        },
        {
          id: "ninjala-episode-51",
          number: 51,
          url: "https://gogoanimehd.io//ninjala-episode-51",
        },
        {
          id: "ninjala-episode-52",
          number: 52,
          url: "https://gogoanimehd.io//ninjala-episode-52",
        },
        {
          id: "ninjala-episode-53",
          number: 53,
          url: "https://gogoanimehd.io//ninjala-episode-53",
        },
        {
          id: "ninjala-episode-54",
          number: 54,
          url: "https://gogoanimehd.io//ninjala-episode-54",
        },
        {
          id: "ninjala-episode-55",
          number: 55,
          url: "https://gogoanimehd.io//ninjala-episode-55",
        },
        {
          id: "ninjala-episode-56",
          number: 56,
          url: "https://gogoanimehd.io//ninjala-episode-56",
        },
        {
          id: "ninjala-episode-57",
          number: 57,
          url: "https://gogoanimehd.io//ninjala-episode-57",
        },
        {
          id: "ninjala-episode-58",
          number: 58,
          url: "https://gogoanimehd.io//ninjala-episode-58",
        },
        {
          id: "ninjala-episode-59",
          number: 59,
          url: "https://gogoanimehd.io//ninjala-episode-59",
        },
        {
          id: "ninjala-episode-60",
          number: 60,
          url: "https://gogoanimehd.io//ninjala-episode-60",
        },
        {
          id: "ninjala-episode-61",
          number: 61,
          url: "https://gogoanimehd.io//ninjala-episode-61",
        },
        {
          id: "ninjala-episode-62",
          number: 62,
          url: "https://gogoanimehd.io//ninjala-episode-62",
        },
        {
          id: "ninjala-episode-63",
          number: 63,
          url: "https://gogoanimehd.io//ninjala-episode-63",
        },
        {
          id: "ninjala-episode-64",
          number: 64,
          url: "https://gogoanimehd.io//ninjala-episode-64",
        },
        {
          id: "ninjala-episode-65",
          number: 65,
          url: "https://gogoanimehd.io//ninjala-episode-65",
        },
        {
          id: "ninjala-episode-66",
          number: 66,
          url: "https://gogoanimehd.io//ninjala-episode-66",
        },
        {
          id: "ninjala-episode-67",
          number: 67,
          url: "https://gogoanimehd.io//ninjala-episode-67",
        },
        {
          id: "ninjala-episode-68",
          number: 68,
          url: "https://gogoanimehd.io//ninjala-episode-68",
        },
        {
          id: "ninjala-episode-69",
          number: 69,
          url: "https://gogoanimehd.io//ninjala-episode-69",
        },
        {
          id: "ninjala-episode-70",
          number: 70,
          url: "https://gogoanimehd.io//ninjala-episode-70",
        },
        {
          id: "ninjala-episode-71",
          number: 71,
          url: "https://gogoanimehd.io//ninjala-episode-71",
        },
        {
          id: "ninjala-episode-72",
          number: 72,
          url: "https://gogoanimehd.io//ninjala-episode-72",
        },
        {
          id: "ninjala-episode-73",
          number: 73,
          url: "https://gogoanimehd.io//ninjala-episode-73",
        },
        {
          id: "ninjala-episode-74",
          number: 74,
          url: "https://gogoanimehd.io//ninjala-episode-74",
        },
        {
          id: "ninjala-episode-75",
          number: 75,
          url: "https://gogoanimehd.io//ninjala-episode-75",
        },
        {
          id: "ninjala-episode-76",
          number: 76,
          url: "https://gogoanimehd.io//ninjala-episode-76",
        },
        {
          id: "ninjala-episode-77",
          number: 77,
          url: "https://gogoanimehd.io//ninjala-episode-77",
        },
        {
          id: "ninjala-episode-78",
          number: 78,
          url: "https://gogoanimehd.io//ninjala-episode-78",
        },
        {
          id: "ninjala-episode-79",
          number: 79,
          url: "https://gogoanimehd.io//ninjala-episode-79",
        },
        {
          id: "ninjala-episode-80",
          number: 80,
          url: "https://gogoanimehd.io//ninjala-episode-80",
        },
        {
          id: "ninjala-episode-81",
          number: 81,
          url: "https://gogoanimehd.io//ninjala-episode-81",
        },
        {
          id: "ninjala-episode-82",
          number: 82,
          url: "https://gogoanimehd.io//ninjala-episode-82",
        },
        {
          id: "ninjala-episode-83",
          number: 83,
          url: "https://gogoanimehd.io//ninjala-episode-83",
        },
        {
          id: "ninjala-episode-84",
          number: 84,
          url: "https://gogoanimehd.io//ninjala-episode-84",
        },
        {
          id: "ninjala-episode-85",
          number: 85,
          url: "https://gogoanimehd.io//ninjala-episode-85",
        },
        {
          id: "ninjala-episode-86",
          number: 86,
          url: "https://gogoanimehd.io//ninjala-episode-86",
        },
        {
          id: "ninjala-episode-87",
          number: 87,
          url: "https://gogoanimehd.io//ninjala-episode-87",
        },
        {
          id: "ninjala-episode-88",
          number: 88,
          url: "https://gogoanimehd.io//ninjala-episode-88",
        },
        {
          id: "ninjala-episode-89",
          number: 89,
          url: "https://gogoanimehd.io//ninjala-episode-89",
        },
        {
          id: "ninjala-episode-90",
          number: 90,
          url: "https://gogoanimehd.io//ninjala-episode-90",
        },
        {
          id: "ninjala-episode-91",
          number: 91,
          url: "https://gogoanimehd.io//ninjala-episode-91",
        },
        {
          id: "ninjala-episode-92",
          number: 92,
          url: "https://gogoanimehd.io//ninjala-episode-92",
        },
        {
          id: "ninjala-episode-93",
          number: 93,
          url: "https://gogoanimehd.io//ninjala-episode-93",
        },
        {
          id: "ninjala-episode-94",
          number: 94,
          url: "https://gogoanimehd.io//ninjala-episode-94",
        },
        {
          id: "ninjala-episode-95",
          number: 95,
          url: "https://gogoanimehd.io//ninjala-episode-95",
        },
      ],
    };
  }
};

export const getAnimeEpisodeStreaming = async (
  episodeId: string,
  provider: string = "zoro"
): Promise<AnimeEpisodeStreaming> => {
  let response;

  if (provider === "zoro") {
    response = await client.get<AnimeEpisodeStreaming>(`/watch/${episodeId}`, {
      params: {
        provider,
      },
    });
    return response.data;
  } else {
    response = await axios.get<Streaming>(
      `${process.env.NEXT_PUBLIC_AVM_STREAM_URL}${episodeId}`
    );

    const data = response.data;

    return {
      iframe: [
        ...Object.values(data?.data?.iframe),
        ...Object.values(data?.data?.nspl),
        ...Object.values(data?.data?.plyr),
      ],
      sources: [
        data?.data?.stream?.multi?.backup,
        data?.data?.stream?.multi?.main,
      ],
    };
  }
};

export const searchAnime = async (query: string, page: number = 1) => {
  const response = await client.get<AnimeResponse<Anime>>(`/${query}`, {
    params: page,
  });
  return response.data;
};

export const getRandomAnime = async () => {
  const response = await client.get<AnimeInfo>("/random-anime");
  return response.data;
};

export const getHomePage = async () => {
  const data = await Promise.all([
    getRecentAnime(),
    getTrendingAnime(),
    getMostPopular(),
    searchAdvanced({
      sort: convertQueryArrayParams(["FAVOURITES_DESC"]),
      type: "ANIME",
    }),
    searchAdvanced({
      type: "ANIME",
      status: "FINISHED",
      sort: convertQueryArrayParams(["SCORE_DESC"]),
    }),
    getNewestComment(),
    searchAdvanced({
      season: "FALL",
      perPage: 5,
    }),
    searchAdvanced({
      season: "WINTER",
      perPage: 5,
    }),
    searchAdvanced({
      season: "SPRING",
      perPage: 5,
    }),
    searchAdvanced({
      season: "SUMMER",
      perPage: 5,
    }),
  ]);

  return data;
};
