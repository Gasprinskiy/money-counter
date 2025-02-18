import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import { SalaryPeriodRepository } from "@/packages/db/repository/salary_period";


export default function Home() {
  const shit = new SalaryPeriodRepository()

  function start() {
    // return shit.startSalaryPeriod({
    //   name: 'Gay', start_date: new Date()
    // })s
    shit.getPeriodList_TEST()
  }

  return (
    <Box className="flex-1 h-[100vh]">
      <Button
        action="positive"
        onPress={start}
      >
        <ButtonText>Hello World!</ButtonText>
      </Button>
    </Box>
  );
}
