import React, { useState } from "react";
import {
  faLightbulb,
  faTag,
  faCog,
  faDownload,
  faExclamationTriangle,
  faAngleDown,
  faAngleUp,
  faCodeCompare,
} from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import ContentBlock from "../ContentBlock";
import "./styles.module.css";

const categories = [
  { name: "Agent Update", icon: faLightbulb, color: "#3498db" },
  { name: "Java Core API", icon: faJava, color: "#27ae60" },
  { name: "Public xAPI Update", icon: faDownload, color: "#f39c12" },
  { name: "Loader Update", icon: faCog, color: "#8e44ad" },
  { name: "Bug Fixes", icon: faExclamationTriangle, color: "#e74c3c" },
];

const ChangelogEntry = ({ change, index, isExpanded, onToggleExpand }) => {
  const getCategoryIcon = (category) => {
    const categoryObj = categories.find((cat) => cat.name === category);
    return categoryObj
      ? { ...categoryObj.icon, color: categoryObj.color }
      : faCodeCompare;
  };

  const renderHeader = () => (
    <div
      style={{
        flex: 1,
        fontWeight: "bold",
        fontSize: "18px",
        color: "#000 !important",
      }}
    >
      {change.title}
    </div>
  );

  return (
    <TimelineItem key={index}>
      <TimelineOppositeContent>
        <h3 style={{ marginTop: 10, color: "#fff" }}>{change.date}</h3>
      </TimelineOppositeContent>
      <TimelineSeparator sx={{ color: "#f44336" }}>
        <FontAwesomeIcon
          icon={getCategoryIcon(change.category)}
          size="2x"
          style={{
            marginBlockStart: 2,
            marginBlockEnd: 2,
            color: getCategoryIcon(change.category).color,
          }}
        />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper
          sx={{
            color: "#1b1b1d",
            borderRadius: 6,
            borderTopRightRadius: 36,
            borderBottomRightRadius: 36,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            padding: "8px",
            backgroundColor: getCategoryIcon(change.category).color,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            maxWidth: "90%", // Set maximum width for the expanded category
            margin: "auto", // Center the expanded category
          }}
          variant="outlined"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onClick={() => index >= 3 && onToggleExpand(index)}
          >
            {renderHeader()}
            {index >= 3 &&
              (isExpanded ? (
                <FontAwesomeIcon icon={faAngleUp} />
              ) : (
                <FontAwesomeIcon icon={faAngleDown} />
              ))}
          </div>
          {(index < 3 || isExpanded) && (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 8,
                }}
              >
                <FontAwesomeIcon
                  icon={getCategoryIcon(change.category)}
                  size="lg"
                  style={{ marginRight: 8 }}
                />
                <span>{` ${change.category} `}</span>
                <FontAwesomeIcon
                  icon={faCodeCompare}
                  size="lg"
                  style={{ marginLeft: 8, marginRight: 8 }}
                />
                <span>{` ${change.version}`}</span>
              </div>
              <List>
                {change.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex} style={{ fontSize: 18 }}>
                    <FontAwesomeIcon
                      icon={faTag}
                      size="lg"
                      style={{ marginRight: 12, alignSelf: "flex-start" }}
                    />
                    {item}
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

const Changelog = (props) => {
  const [expandedEntries, setExpandedEntries] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleToggleExpand = (index) => {
    setExpandedEntries((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((item) => item !== index)
        : [...prevExpanded, index]
    );
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
          <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 8 }}>
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outlined"
                style={{
                  marginRight: 16,
                  marginBottom: 8,
                  textDecoration:
                    selectedCategory === category.name ? "underline" : "none",
                  boxShadow:
                    selectedCategory === category.name
                      ? "0 4px 8px rgba(0, 0, 0, 0.1)"
                      : "none",
                  color: category.color,
                  borderColor: category.color,
                }}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
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
          sx={{ [`& .${timelineOppositeContentClasses.root}`]: { flex: 0.2 } }}
        >
          {sortedChanges
            .filter(
              (change) =>
                !selectedCategory || change.category === selectedCategory
            )
            .map((change, index) => (
              <ChangelogEntry
                key={index}
                change={change}
                index={index}
                isExpanded={expandedEntries.includes(index)}
                onToggleExpand={handleToggleExpand}
              />
            ))}
        </Timeline>
      </ContentBlock>
    </>
  );
};

export default Changelog;
