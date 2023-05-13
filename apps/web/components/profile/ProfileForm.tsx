import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import React, { FC, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { RiProfileLine } from "react-icons/ri";
import { debounce, Subject, timer } from "rxjs";
import { SectionHeader } from "ui";
import { Profile } from "../../templates/basic/components/resume";
import { useProfileDispatch } from "./ProfileContext";

type ProfileFormProps = Profile;

const ProfileForm: FC<ProfileFormProps> = ({
  picture,
  fullName,
  phoneNumber,
  emailAddress,
  dateOfBirth,
  headline,
  yearsOfExperience,
  aboutMe,
}) => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<Required<Profile>>({
    defaultValues: {
      fullName: fullName || "",
      phoneNumber: phoneNumber || "",
      emailAddress: emailAddress || "",
      dateOfBirth: dateOfBirth || new Date(Date.now()),
      picture: picture || "",
      headline: headline || "",
      yearsOfExperience: yearsOfExperience || 0,
      aboutMe: aboutMe || "",
    },
  });

  const dispatch = useProfileDispatch();

  const formValues = new Subject<Profile>();
  const debouncedValues = formValues.pipe(debounce(() => timer(500)));

  useEffect(() => {
    const watchSubscription = watch((value, { name, type }) => {
      formValues.next(value);
    });
    const dispatchOndebounce = debouncedValues.subscribe((profile) => {
      dispatch({ type: "edit", data: profile });
    });

    return () => {
      watchSubscription.unsubscribe();
      dispatchOndebounce.unsubscribe();
    };
  }, [watch]);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null | undefined>();
  const [preview, setPreview] = useState<string | null | undefined>();

  useEffect(() => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setPreview(null);
    }
  }, [selectedImage]);

  function previewImage(event: any) {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setSelectedImage(file);
    } else {
      setSelectedImage(null);
    }
  }

  return (
    <Box mb="4" pos="relative" id="profile">
      <SectionHeader>
        <RiProfileLine />
        <Text as="span" ml="3">
          Profil
        </Text>
      </SectionHeader>

      <Controller
        name="picture"
        control={control}
        render={({ fieldState }) => (
          <FormControl
            isInvalid={fieldState.invalid}
            mb="4"
            display="flex"
            flexDirection="column"
            gap="4"
          >
            <Input
              id="picture"
              accept="image/*"
              type="file"
              onChange={previewImage}
              ref={fileInputRef}
              display="none"
            />
            {preview ? (
              <Container
                maxW="sm"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  src={preview}
                  borderRadius="full"
                  alt="Photo de Résume"
                />
              </Container>
            ) : null}
            <Button
              variant="outline"
              onClick={(event) => {
                event.preventDefault();
                if (fileInputRef.current) {
                  fileInputRef.current.click();
                }
              }}
            >
              Ajouter Votre Photo
            </Button>
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="fullName"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid} mb="4">
            <FormLabel htmlFor="fullName" mt="4">
              Nom Prénom
            </FormLabel>
            <Input
              id="fullName"
              placeholder="Votre Nom et Prénom"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="phoneNumber"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
          pattern: {
            value: /(06|07)[0-9]{8}/,
            message: "Entrez un numéro de téléphone",
          },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid} mb="4">
            <FormLabel htmlFor="phoneNumber">Numéro téléphone</FormLabel>
            <Input
              id="phoneNumber"
              placeholder="Votre numéro de téléphone"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {errors.phoneNumber && errors.phoneNumber.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="emailAddress"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid} mb="4">
            <FormLabel htmlFor="emailAddress">Adresse Email</FormLabel>
            <Input
              id="emailAddress"
              placeholder="Votre adresse Email"
              type="email"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="dateOfBirth"
        control={control}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid} mb="4">
            <FormLabel htmlFor="dateOfBirth">Date de naissance</FormLabel>
            <Input
              id="dateOfBirth"
              placeholder="Votre date de naissance"
              type="date"
              {...{
                onChange,
                onBlur,
                value: dayjs(value).format("YYYY-MM-DD"),
                ref,
              }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="headline"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid} mb="4">
            <FormLabel htmlFor="headline" mt="4">
              Nom de poste
            </FormLabel>
            <Input
              id="headline"
              placeholder="Votre intitulé de poste"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="yearsOfExperience"
        control={control}
        rules={{
          required: "This is required",
        }}
        render={({ field }) => (
          <FormControl isInvalid={!!errors?.yearsOfExperience} mb="4">
            <FormLabel htmlFor="yearsOfXp">Année Expérience</FormLabel>
            <HStack spacing="8">
              <NumberInput
                {...field}
                min={0}
                max={50}
                id="yearsOfExperience"
                w="32"
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Slider
                flex="1"
                min={0}
                max={50}
                step={1}
                focusThumbOnChange={false}
                w="32"
                {...field}
              >
                <SliderTrack>
                  <SliderFilledTrack bg="blackAlpha.700" />
                </SliderTrack>
                <SliderThumb fontSize="sm" boxSize="32px">
                  {field.value}
                </SliderThumb>
              </Slider>
            </HStack>
            <FormErrorMessage>
              {errors.yearsOfExperience && errors.yearsOfExperience.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />
      <Controller
        name="aboutMe"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid} mb="4">
            <FormLabel htmlFor="aboutMe">A propos de moi</FormLabel>
            <Textarea
              id="aboutMe"
              placeholder="Quelques mots sur vous"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />
      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
};

export default ProfileForm;
