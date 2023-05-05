import React, { ReactElement } from "react";
import { Card, CardBody, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";
import { NextPageWithLayout } from "../_app";
import ItemResume from "../../components/dashboard/ItemResume";
import { IoAddOutline } from "react-icons/io5";
import useSWR from "swr";
import axios from "axios";

const Dashboard: NextPageWithLayout = () => {
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
      key={resume.headline}
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

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
