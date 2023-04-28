import { Box, Heading, Image, Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import Page from "../../components/page/Page";
import { resumeJson } from "../../pages/resume-json";
import AboutMe from "./components/AboutMe";
import EducationsList from "./components/EducationsList";
import HobbiesList from "./components/HobbiesList";
import Identity from "./components/Identity";
import LanguagesList from "./components/LanguagesList";
import RadarChart from "./components/RadarChart";
import SkillsList from "./components/SkillsList";
import TimelineList from "./components/TimelineList";

export default function CoverPage() {
  const {
    name,
    headline,
    yearsOfExperience,
    skills,
    languages,
    hobbies,
    aboutMe,
    timeline,
    educations,
    softSkills,
    workExperiences,
  } = resumeJson;
  return (
    <Page>
      <Stack
        direction="row"
        spacing={4}
        divider={<StackDivider borderColor="purple.600" />}
        py={8}
        px={4}
        h="100%"
      >
        <Stack direction="column" spacing={12} flexShrink={1}>
          <Box w="220px">
            <Image
              borderRadius="full"
              boxSize="220px"
              border="1px"
              borderColor="purple.600"
              objectFit="cover"
              src="/image_photos_resume_it.avif"
              alt=""
            />
          </Box>
          <Identity
            name={name}
            headline={headline}
            yearsOfExperience={yearsOfExperience}
          />

          <Box>
            <Heading as="h4" size="md" mb="4" color="black">
              COMPETENCES
            </Heading>
            <SkillsList skills={skills} />
          </Box>

          <Box>
            <Heading as="h4" size="md" mb="4" color="black">
              LANGUES
            </Heading>
            <LanguagesList languages={languages} />
          </Box>

          <Box>
            <Heading as="h4" size="md" mb="4" color="black">
              HOBBIES
            </Heading>
            <HobbiesList hobbies={hobbies} />
          </Box>
        </Stack>

        <Stack
          direction="column"
          spacing={6}
          divider={<StackDivider borderColor="purple.600" />}
        >
          <Box>
            <Heading as="h4" size="md" mb="4" ml="4" color="purple.600">
              A PROPOS
            </Heading>
            <Box
              mt="-7"
              ml="2"
              mb="4"
              backgroundColor="cyan.300"
              height="3"
              width="14"
              borderRadius="2"
            ></Box>
            <AboutMe aboutMe={aboutMe} />
          </Box>

          <Box>
            <Heading as="h4" size="md" mb="4" ml="4" color="purple.600">
              TIMELINE
            </Heading>
            <Box
              mt="-7"
              ml="2"
              mb="4"
              backgroundColor="cyan.300"
              height="3"
              width="14"
              borderRadius="3"
            ></Box>
            <TimelineList timeline={timeline} />
          </Box>

          <Box>
            <Heading as="h4" size="md" mb="4" ml="4" color="purple.600">
              FORMATION
            </Heading>
            <Box
              mt="-7"
              ml="2"
              mb="4"
              backgroundColor="cyan.300"
              height="3"
              width="14"
              borderRadius="2"
            ></Box>
            <EducationsList educations={educations} />
          </Box>

          <Box>
            <Heading as="h4" size="md" mb="4" ml="4" color="purple.600">
              PROFIL PSYCHOTECHNIQUE
            </Heading>
            <Box
              mt="-7"
              ml="2"
              backgroundColor="cyan.300"
              height="3"
              width="14"
              borderRadius="2"
            ></Box>
            <RadarChart />
          </Box>
        </Stack>
      </Stack>
    </Page>
  );
}
