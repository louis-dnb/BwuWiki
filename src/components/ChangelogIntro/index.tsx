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
import LightbulbTwoToneIcon from "@mui/icons-material/LightbulbTwoTone";
import LabelTwoToneIcon from "@mui/icons-material/LabelTwoTone";
import ContentBlock from "../ContentBlock";

import "./styles.module.css";

// ... (existing imports)

export default function ChangelogIntro(props) {
  const [expandedEntries, setExpandedEntries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleToggleExpand = (index) => {
    setExpandedEntries((prevExpanded) => {
      if (prevExpanded.includes(index)) {
        return prevExpanded.filter((item) => item !== index);
      } else {
        return [...prevExpanded, index];
      }
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Ensure props.changes is an array and has the necessary structure
  const filteredChanges = Array.isArray(props.changes)
    ? selectedCategory
      ? props.changes.filter((change) =>
          change && change.changes
            ? change.changes.some((item) => item.category === selectedCategory)
            : false
        )
      : props.changes
    : [];

  return (
    <>
      <ContentBlock title="ChangelogIntro">
        <div className="category-filter">
          {[
            "",
            "Agent Update:",
            "Java Core API:",
            "Public xAPI Update:",
            "Loader Update:",
            "Bug Fixes:",
          ].map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category || "All"}
            </button>
          ))}
        </div>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {filteredChanges.map((change, index) => (
            <TimelineItem key={index}>
              {change && change.date && (
                <TimelineOppositeContent>
                  <h3 style={{ marginTop: 10 }}>{change.date}</h3>
                </TimelineOppositeContent>
              )}
              <TimelineSeparator sx={{ color: "#f44336" }}>
                <LightbulbTwoToneIcon
                  fontSize="medium"
                  sx={{ marginBlockStart: 2, marginBlockEnd: 2 }}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                {change &&
                  change.changes &&
                  change.changes.map((categoryChange, categoryIndex) => (
                    <Paper
                      key={categoryIndex}
                      sx={{
                        width: "100%",
                        color: "#fff",
                        borderRadius: 6,
                        borderTopRightRadius: 36,
                        borderBottomRightRadius: 36,
                      }}
                      variant="outlined"
                    >
                      {categoryChange && (
                        <h3
                          style={{
                            paddingLeft: 16,
                            paddingTop: 8,
                            cursor: "pointer",
                          }}
                          onClick={() => handleToggleExpand(index)}
                        >
                          {categoryChange.category}
                        </h3>
                      )}
                      {index < 3 || expandedEntries.includes(index) ? (
                        <List>
                          {categoryChange.items &&
                            categoryChange.items.map((item, itemIndex) => (
                              <ListItem
                                key={itemIndex}
                                style={{ fontSize: 18 }}
                              >
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
                  ))}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </ContentBlock>
    </>
  );
}
