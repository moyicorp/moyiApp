import { InputFieldProps } from "@/types/type";
import React from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const InputField = ({
  // label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,

  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text
            style={{
              color: "#121111",
              fontWeight: "bold",
              fontSize: 10,
              ...labelStyle,
            }}
          >
            {/* {label} */}
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              fontSize: 10,

              borderRadius: 8,
              paddingHorizontal: 2,
              paddingVertical: 2,
              marginBottom: 16,
              ...containerStyle,
            }}
          >
            {icon && (
              <Image
                source={icon}
                style={{ width: 24, height: 24, marginRight: 8, ...iconStyle }}
              />
            )}
            <TextInput
              secureTextEntry={secureTextEntry}
              style={{
                flex: 1,
                backgroundColor: "transparent",
                color: "#121111",
                ...inputStyle,
              }}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
