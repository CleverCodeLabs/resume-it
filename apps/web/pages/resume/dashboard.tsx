import React, { ReactElement } from "react";
import { Card, CardBody, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Layout from "../../components/layouts/Layout";
import { NextPageWithLayout } from "../_app";
import ItemResume from "../../components/dashboard/ItemResume";
import { IoAddOutline } from "react-icons/io5";

const Dashboard: NextPageWithLayout = () => {
  const router = useRouter();
  const resumes = [
    {
      headline: "Tech Lead / Lead Dev",
      yearsOfExperience: 12,
    },
    {
      headline: "Lead Dev",
      yearsOfExperience: 12,
    },
  ];

  const handleClick = () => {
    router.push("/resume/editing");
  };
  const listItems = resumes.map((resume: any) => (
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
