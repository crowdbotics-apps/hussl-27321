import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_347_2742} />
      <View style={styles.View_342_145}>
        <Text style={styles.Text_342_145}>Ideate</Text>
      </View>
      <View style={styles.View_342_146}>
        <Text style={styles.Text_342_146}>Problems</Text>
      </View>
      <View style={styles.View_342_147}>
        <Text style={styles.Text_342_147}>Solutions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/290f/757a/aaad00f7ce15d33156dfd529dc19d575"
        }}
        style={styles.ImageBackground_342_148}
      />
      <View style={styles.View_342_150}>
        <Text style={styles.Text_342_150}>CONSUMER</Text>
      </View>
      <View style={styles.View_342_152}>
        <Text style={styles.Text_342_152}>Pitches</Text>
      </View>
      <View style={styles.View_342_157}>
        <View style={styles.View_I342_157_183_2} />
        <View style={styles.View_I342_157_183_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acc1/bc07/d0659af62ba20de29b5a604198a24139"
            }}
            style={styles.ImageBackground_I342_157_183_4}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a2d/63fc/408fb85c4bb6e63c8f409553279af0b4"
          }}
          style={styles.ImageBackground_I342_157_183_16}
        />
        <View style={styles.View_I342_157_183_302}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f31/89a1/e2656eed01423039d3027bbcdf28091a"
            }}
            style={styles.ImageBackground_I342_157_183_303}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0df9/a63d/9cb84191775c9ad96f06cc94de757391"
            }}
            style={styles.ImageBackground_I342_157_183_304}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f61e/e9c0/d187098a1363bad1307f336697e12e63"
        }}
        style={styles.ImageBackground_342_158}
      />
      <View style={styles.View_342_715}>
        <View style={styles.View_I342_715_342_91} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
          }}
          style={styles.ImageBackground_I342_715_342_99}
        />
        <View style={styles.View_I342_715_342_100}>
          <View style={styles.View_I342_715_342_101}>
            <Text style={styles.Text_I342_715_342_101}>325</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_I342_715_342_102}
          />
        </View>
        <View style={styles.View_I342_715_342_103}>
          <Text style={styles.Text_I342_715_342_103}>John T</Text>
        </View>
        <View style={styles.View_I342_715_342_104}>
          <Text style={styles.Text_I342_715_342_104}>Cab booking app</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/688b/ce80/a4e0fc2982f6cfee2b9dfc66d5f14c75"
          }}
          style={styles.ImageBackground_I342_715_342_105}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa3c/8e52/530b4a798a1da6f6575e6cb66ec51d51"
          }}
          style={styles.ImageBackground_I342_715_342_109}
        />
        <View style={styles.View_I342_715_342_76}>
          <View style={styles.View_I342_715_342_77} />
          <View style={styles.View_I342_715_342_78}>
            <Text style={styles.Text_I342_715_342_78}>
              TAXIS ARE FOR BOOMERS
            </Text>
          </View>
        </View>
        <View style={styles.View_I342_715_342_83}>
          <View style={styles.View_I342_715_342_84}>
            <Text style={styles.Text_I342_715_342_84}>3</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9d2/0b6e/2c314d586b2051bbc0d2a1f9bb9a45d8"
            }}
            style={styles.ImageBackground_I342_715_342_85}
          />
        </View>
        <View style={styles.View_I342_715_342_94}>
          <Text style={styles.Text_I342_715_342_94}>3d</Text>
        </View>
      </View>
      <View style={styles.View_345_0}>
        <View style={styles.View_I345_0_342_91} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/17ba/6313/5bebd25ebbd80dd79f90303762664b0e"
          }}
          style={styles.ImageBackground_I345_0_342_99}
        />
        <View style={styles.View_I345_0_342_100}>
          <View style={styles.View_I345_0_342_101}>
            <Text style={styles.Text_I345_0_342_101}>325</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6985/3d7a/5b693f6841d909df2dc4fd6057250786"
            }}
            style={styles.ImageBackground_I345_0_342_102}
          />
        </View>
        <View style={styles.View_I345_0_342_103}>
          <Text style={styles.Text_I345_0_342_103}>John Tan</Text>
        </View>
        <View style={styles.View_I345_0_342_104}>
          <Text style={styles.Text_I345_0_342_104}>Cab booking app</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/688b/ce80/a4e0fc2982f6cfee2b9dfc66d5f14c75"
          }}
          style={styles.ImageBackground_I345_0_342_105}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa3c/8e52/530b4a798a1da6f6575e6cb66ec51d51"
          }}
          style={styles.ImageBackground_I345_0_342_109}
        />
        <View style={styles.View_I345_0_342_76}>
          <View style={styles.View_I345_0_342_77} />
          <View style={styles.View_I345_0_342_78}>
            <Text style={styles.Text_I345_0_342_78}>TAXIS ARE FOR BOOMERS</Text>
          </View>
        </View>
        <View style={styles.View_I345_0_342_83}>
          <View style={styles.View_I345_0_342_84}>
            <Text style={styles.Text_I345_0_342_84}>3</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a9d2/0b6e/2c314d586b2051bbc0d2a1f9bb9a45d8"
            }}
            style={styles.ImageBackground_I345_0_342_85}
          />
        </View>
        <View style={styles.View_I345_0_342_94}>
          <Text style={styles.Text_I345_0_342_94}>3d</Text>
        </View>
      </View>
      <View style={styles.View_347_2741}>
        <Text style={styles.Text_347_2741}>hussl.</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_347_2742: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_342_145: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("14.89071038251366%")
  },
  Text_342_145: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 29,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.36,
    textTransform: "none"
  },
  View_342_146: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("23.36065573770492%")
  },
  Text_342_146: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_342_147: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("23.36065573770492%")
  },
  Text_342_147: {
    color: "rgba(255, 196, 51, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_342_148: {
    width: wp("18.933333333333334%"),
    height: hp("0%"),
    top: hp("25.546448087431695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%")
  },
  View_342_150: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("29.098360655737704%")
  },
  Text_342_150: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_342_152: {
    width: wp("14.666666666666666%"),
    top: hp("23.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%")
  },
  Text_342_152: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  View_342_157: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("99.86338797814209%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I342_157_183_2: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I342_157_183_3: {
    flexGrow: 1,
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("3.551912568306008%")
  },
  ImageBackground_I342_157_183_4: {
    width: wp("7.542857360839844%"),
    height: hp("3.864168729938445%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I342_157_183_16: {
    flexGrow: 1,
    width: wp("6.933333333333333%"),
    height: hp("3.196721259362059%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.46666666666667%"),
    top: hp("3.961748633879779%")
  },
  View_I342_157_183_302: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.13333333333333%"),
    top: hp("1.3661202185792263%")
  },
  ImageBackground_I342_157_183_303: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I342_157_183_304: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.799999999999997%")
  },
  ImageBackground_342_158: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.39999999999999%"),
    top: hp("5.191256830601093%")
  },
  View_342_715: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("33.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I342_715_342_91: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 153, 204, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_I342_715_342_99: {
    flexGrow: 1,
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2%"),
    top: hp("13.251366120218584%")
  },
  View_I342_715_342_100: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("14.071038251366126%")
  },
  View_I342_715_342_101: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.60128580729166%")
  },
  Text_I342_715_342_101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I342_715_342_102: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I342_715_342_103: {
    flexGrow: 1,
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("14.61748633879781%")
  },
  Text_I342_715_342_103: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I342_715_342_104: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("3.0054644808743234%")
  },
  Text_I342_715_342_104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I342_715_342_105: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666666%"),
    top: hp("19.262295081967217%")
  },
  ImageBackground_I342_715_342_109: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333333%"),
    top: hp("0.8196721311475414%")
  },
  View_I342_715_342_76: {
    flexGrow: 1,
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333332%"),
    top: hp("6.830601092896174%")
  },
  View_I342_715_342_77: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I342_715_342_78: {
    width: wp("38.4%"),
    top: hp("0.8196721311475486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333346%")
  },
  Text_I342_715_342_78: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I342_715_342_83: {
    flexGrow: 1,
    width: wp("7.6923828125%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666667%"),
    top: hp("14.071038251366126%")
  },
  View_I342_715_342_84: {
    width: wp("1.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.825716145833319%")
  },
  Text_I342_715_342_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I342_715_342_85: {
    width: wp("3.692412567138672%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I342_715_342_94: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.79999999999999%"),
    top: hp("2.0491803278688536%")
  },
  Text_I342_715_342_94: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_345_0: {
    width: wp("62.93333333333333%"),
    minWidth: wp("62.93333333333333%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("33.19672131147541%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I345_0_342_91: {
    flexGrow: 1,
    width: wp("62.93333333333333%"),
    height: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(102, 153, 204, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_I345_0_342_99: {
    flexGrow: 1,
    width: wp("9.6%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("13.251366120218584%")
  },
  View_I345_0_342_100: {
    flexGrow: 1,
    width: wp("12.201285807291667%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("14.071038251366126%")
  },
  View_I345_0_342_101: {
    width: wp("5.6000000000000005%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.601302083333337%")
  },
  Text_I345_0_342_101: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I345_0_342_102: {
    width: wp("4.467951965332031%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I345_0_342_103: {
    flexGrow: 1,
    width: wp("13.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.400000000000006%"),
    top: hp("14.61748633879781%")
  },
  Text_I345_0_342_103: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I345_0_342_104: {
    flexGrow: 1,
    width: wp("50.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333346%"),
    top: hp("3.0054644808743234%")
  },
  Text_I345_0_342_104: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.14,
    textTransform: "none"
  },
  ImageBackground_I345_0_342_105: {
    flexGrow: 1,
    width: wp("9.866666666666667%"),
    height: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.46666666666667%"),
    top: hp("19.262295081967217%")
  },
  ImageBackground_I345_0_342_109: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333333%"),
    top: hp("0.8196721311475414%")
  },
  View_I345_0_342_76: {
    flexGrow: 1,
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333346%"),
    top: hp("6.830601092896174%")
  },
  View_I345_0_342_77: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_I345_0_342_78: {
    width: wp("38.4%"),
    top: hp("0.8196721311475486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333258%")
  },
  Text_I345_0_342_78: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 8,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_I345_0_342_83: {
    flexGrow: 1,
    width: wp("7.6923828125%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666668%"),
    top: hp("14.071038251366126%")
  },
  View_I345_0_342_84: {
    width: wp("1.866666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.825716145833326%")
  },
  Text_I345_0_342_84: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I345_0_342_85: {
    width: wp("3.692412567138672%"),
    height: hp("2.185792349726776%"),
    top: hp("0.5464480874316848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I345_0_342_94: {
    flexGrow: 1,
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.80000000000001%"),
    top: hp("2.0491803278688536%")
  },
  Text_I345_0_342_94: {
    color: "rgba(222, 222, 222, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_347_2741: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666668%"),
    top: hp("6.147540983606557%")
  },
  Text_347_2741: {
    color: "rgba(45, 64, 89, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.24,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
