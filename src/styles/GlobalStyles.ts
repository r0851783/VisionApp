import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
  },

  // Header Styles
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4a4a4a',
    textAlign: 'center',
  },

  // Body Styles
  body: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyHigher: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 52,
  },
  nameButton: {
    padding: 15,
    margin: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#4a4a4a',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  nameButtonSelected: {
    backgroundColor: '#d4edda',
  },
  nameButtonText: {
    fontSize: 18,
    color: '#4a4a4a',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
  },
  halfInputContainer: {
    flex: 1,
    marginRight: 10,
  },
  textInput: {
        flex: 1,
        textAlignVertical: 'top',
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        width: '80%',
  },

  //Dropdown Styles
  dropdown: {
    padding: 15,
    margin: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#4a4a4a',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginLeft: 40,
  },
  dropDownContainer: {
    backgroundColor: "#dfdfdf",
    borderColor: '#4a4a4a',
    width: '80%',
    maxWidth: '90%',
    minWidth: '80%',
    alignSelf: 'center',
    position: 'relative',
    zIndex: 1000,
    marginTop: -60,
  },

  //samenvatting
  contentContainerSamenvatting: {
        padding: 20,
        alignItems: 'center',
        paddingBottom: 20,
  },
  summaryContainer: {
      width: '100%',
  },
  headerContainerSamenvatting: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingHorizontal: 20,
  },
  labelContainer: {
      marginBottom: 15,
  },
  label: {
      color: '#4a4a4a',
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 5,
  },
  value: {
      fontSize: 16,
      color: '#333',
  },
  dateContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 15,
  },
  dateItem: {
      flex: 1,
  },
  line: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginVertical: 10,
  },
  aquaTitle: {
        color: '#8e9c3e',
        marginLeft: 15,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
    },
  
  // Footer Styles
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  footerButton: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#4a4a4a',
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  startButton: {
    fontSize: 18,
    color: '#4a4a4a',
  },
  footerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  footerButtonSmall: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#4a4a4a',
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },

  // Error Styles
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 10,
  },
});
