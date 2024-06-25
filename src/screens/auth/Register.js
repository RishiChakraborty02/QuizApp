import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    department: '',
    userType: '',
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  const renderInputField = () => {
    const headers = ["Name", "Email", "Password", "Department", "User Type"];
    const headings = ["Enter your name", "Enter your email", "Enter your password", "Enter your department", "Enter your user type"]
    return (
      <>
        <Text style={styles.header1}>{headings[currentStep]}</Text>
        <TextInput
          style={styles.input}
          placeholder={headers[currentStep]}
          value={formData[Object.keys(formData)[currentStep]]}
          onChangeText={(text) => setFormData({ ...formData, [Object.keys(formData)[currentStep]]: text })}
          secureTextEntry={currentStep === 2}
          keyboardType={currentStep === 1 ? "email-address" : "default"}
        />
      </>
    );
  };

  const renderProgressDots = () => {
    return (
      <View style={styles.progressContainer}>
        {[...Array(5)].map((_, index) => (
          <Pressable
          key={index}
          onPress={() => setCurrentStep(index)}
          style={[styles.dot, currentStep === index && styles.activeDot]}
        />
        ))}
      </View>
    );
  };

  return (

    <View style={styles.container}>
      <Text style={styles.mainHeader}>Get Started</Text>
      {renderInputField()}
      {renderProgressDots()}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>{currentStep < 4 ? 'Next' : 'Submit'}</Text>
        </Pressable>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header1:{
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 20,
    color: '#64748b'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  mainHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    color : 'blue'
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
  position: 'absolute',
  right: 50,
  bottom: 50
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop:50
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: 'grey',
    borderRadius: 5,
    margin: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
});

export default RegistrationForm;