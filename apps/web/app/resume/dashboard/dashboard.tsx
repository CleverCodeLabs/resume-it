"use client";

import { Card, CardBody, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { IoAddOutline } from "react-icons/io5";
import useSWR from "swr";
import ItemResume from "../../components/dashboard/ItemResume";

const Dashboard: FC = () => {
  const router = useRouter();
  const fetcher = (url: any) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR("http://localhost:3333/resumes", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const handleClick = () => {
    router.push("/resume/editing");
  };
  const listItems = data.map((resume: any) => (
    <ItemResume
      key={resume.id}
      headline={resume.headline}
      yearsOfExperience={resume.yearsOfExperience}
    />
  ));
  return (
    <SimpleGrid gridTemplateColumns="repeat(auto-fit, 300px)" gap="4" p={4}>
      {listItems}
      <Card
        onClick={() => {
          handleClick();
        }}
        _hover={{ cursor: "grab" }}
      >
        <CardBody textAlign="center">
          <VStack>
            <IoAddOutline size={100} />
            <Text>Création d'un CV</Text>
          </VStack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default Dashboard;
