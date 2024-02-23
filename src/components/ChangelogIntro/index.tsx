import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import LightbulbTwoToneIcon from "@mui/icons-material/LightbulbTwoTone";
import LabelTwoToneIcon from "@mui/icons-material/LabelTwoTone";
import ContentBlock from "../ContentBlock";

import "./styles.module.css";

const categories = [
  "Agent Update",
  "Java Core API",
  "Public xAPI Update",
  "Loader Update",
  "Bug Fixes",
];

export default function Changelog(props) {
  const [expandedEntries, setExpandedEntries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedEntries((prevExpanded) => {
      if (prevExpanded.includes(index)) {
        return prevExpanded.filter((item) => item !== index);
      } else {
        return [...prevExpanded, index];
      }
    });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevSelected) =>
      prevSelected === category ? null : category
    );
  };

  const currentDate = new Date().toLocaleDateString();

  const sortedChanges = [...props.changes].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <ContentBlock title="Patch Notes">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <div style={{ display: "flex", marginBottom: 8 }}>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outlined"
                style={{
                  marginRight: 16,
                  textDecoration:
                    selectedCategory === category ? "underline" : "none",
                  boxShadow:
                    selectedCategory === category
                      ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                      : "none",
                }}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          <div
            style={{
              fontSize: 14,
              marginBottom: 8,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            Current Date: {currentDate}
          </div>
        </div>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {sortedChanges
            .filter(
              (change) =>
                !selectedCategory || change.category === selectedCategory
            )
            .map((change, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent>
                  <h3 style={{ marginTop: 10 }}>{change.date}</h3>
                </TimelineOppositeContent>
                <TimelineSeparator sx={{ color: "#f44336" }}>
                  <LightbulbTwoToneIcon
                    fontSize="medium"
                    sx={{ marginBlockStart: 2, marginBlockEnd: 2 }}
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    sx={{
                      color: "#fff",
                      borderRadius: 6,
                      borderTopRightRadius: 36,
                      borderBottomRightRadius: 36,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                    variant="outlined"
                  >
                    <h3
                      style={{
                        paddingLeft: 16,
                        paddingTop: 8,
                        cursor: "pointer",
                      }}
                      onClick={() => handleToggleExpand(index)}
                    >
                      {`${change.title} - ${change.version}`}
                    </h3>
                    {index < 3 || expandedEntries.includes(index) ? (
                      <List>
                        {change.items.map((item, itemIndex) => (
                          <ListItem key={itemIndex} style={{ fontSize: 18 }}>
                            <LabelTwoToneIcon
                              fontSize="medium"
                              style={{
                                marginRight: 12,
                                alignSelf: "flex-start",
                              }}
                            />
                            {item}
                          </ListItem>
                        ))}
                      </List>
                    ) : null}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      </ContentBlock>
    </>
  );
}
