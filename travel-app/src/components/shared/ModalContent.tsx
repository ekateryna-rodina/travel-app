import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { SearchModalSettingsTypes } from "../../helpers/enums";
import { AppState } from "../../store/rootStore";
import { IDestination } from "../../store/search/models/Hotel";
import DatesModalContent from "../DatesModalContent";
import DestinationsModalContent from "../DestinationsModalContent";
import GuestsModalContent from "../GuestsModalContent";

interface IModalContentProps {
  destinations: IDestination[];
}
const ModalContent = (props: IModalContentProps) => {
  const { destinations } = props;
  const { isOpened, selectedIndex } = useSelector(
    (state: AppState) => state.modal
  );
  const destinationsModalContentRef = React.useRef().current;
  const _renderModalContent = () => {
    switch (selectedIndex) {
      case SearchModalSettingsTypes.destination:
        return <DestinationsModalContent destinations={destinations} />;
      case SearchModalSettingsTypes.guests:
        return <GuestsModalContent />;
      case SearchModalSettingsTypes.date:
        return <DatesModalContent />;
      default:
        return <></>;
    }
  };

  React.useEffect(() => {}, [isOpened, selectedIndex]);
  //   return (
  //     <View>
  //       <DestinationsModalContent destinations={destinations} />
  //       <GuestsModalContent
  //       />
  //     </View>
  //   );
  return <View>{_renderModalContent()}</View>;
};

export default ModalContent;
